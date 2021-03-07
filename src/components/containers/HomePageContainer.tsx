import { Game } from "domain/entity"
import {
  HomePageTemplate,
  Props as TemplateProps,
} from "components/templates/HomePageTemplate"
import { ApplicationValueRepository } from "infrastructure/applicationValueRepository"
import { GameRepository } from "infrastructure/gameRepository"
import { database } from "plugins/firebaseApp"
import { useRealtimeListener } from "../hooks/useRealtimeListener"
import { useCreateForm } from "../hooks/useCreateForm"

export type Props = {
  games: Game[]
}

export function HomePageContainer({ games }: Props) {
  const appValRepository = new ApplicationValueRepository(database)
  const gameRepository = new GameRepository(database, appValRepository)
  const formProps = useCreateForm(gameRepository)

  const appValues = useRealtimeListener(appValRepository)
  const numberOfGames = appValues ? appValues.numberOfGames : 0

  const props: TemplateProps = {
    games,
    numberOfGames,
    ...formProps,
  }

  return <HomePageTemplate {...props} />
}
