import { GetStaticProps, InferGetStaticPropsType } from "next"
import { database } from "plugins/firebaseApp"
import { Game } from "domain/entity"
import { GameRepository } from "infrastructure/gameRepository"
import { HomePageTemplate } from "components/HomePageTemplate"

type Props = {
  games: Game[]
  numberOfGames: number
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gameRepository = new GameRepository(database)
  const initialPageGames = await gameRepository.getGames({
    index: 0,
    limit: 10,
  })

  return {
    props: {
      games: initialPageGames.games,
      numberOfGames: initialPageGames.numberOfGames,
    },
  }
}

export default function Home({
  games,
  numberOfGames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePageTemplate games={games} numberOfGames={numberOfGames} />
}
