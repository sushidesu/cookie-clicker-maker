import { GetStaticProps, InferGetStaticPropsType } from "next"
import { database } from "plugins/firebaseApp"
import { Game } from "domain/entity"
import { GameRepository } from "infrastructure/gameRepository"
import { ApplicationValueRepository } from "infrastructure/applicationValueRepository"
import { HomePageContainer } from "components/containers/HomePageContainer"

type Props = {
  games: Game[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const appValueRepository = new ApplicationValueRepository(database)
  const gameRepository = new GameRepository(database, appValueRepository)
  const games = await gameRepository.getGames({
    limit: 10,
  })

  return {
    props: {
      games,
    },
  }
}

export default function Home({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePageContainer games={games} />
}
