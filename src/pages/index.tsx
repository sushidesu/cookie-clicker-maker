import { GetStaticProps, InferGetStaticPropsType } from "next"
import { database } from "plugins/firebaseApp"
import { Game } from "domain/entity"
import { GameRepository } from "infrastructure/gameRepository"
import { ApplicationValueRepository } from "infrastructure/applicationValueRepository"
import { HomePageContainer } from "components/containers/HomePageContainer"

type Props = {
  games: Game[]
  numberOfGames: number
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gameRepository = new GameRepository(database)
  const appValueRepository = new ApplicationValueRepository(database)
  const initialPageGames = await gameRepository.getGames({
    index: 0,
    limit: 10,
  })
  const appValue = await appValueRepository.getApplicationValue()

  return {
    props: {
      games: initialPageGames.games,
      numberOfGames: appValue.numberOfGames,
    },
  }
}

export default function Home({
  games,
  numberOfGames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePageContainer games={games} numberOfGames={numberOfGames} />
}
