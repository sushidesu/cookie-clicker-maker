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
import { usePaginatedGames } from "../hooks/usePaginatedGames"

export type Props = {
  initGames: Game[]
}

export function HomePageContainer({ initGames }: Props) {
  const appValRepository = new ApplicationValueRepository(database)
  const gameRepository = new GameRepository(database, appValRepository)
  const formProps = useCreateForm(gameRepository)

  const appValues = useRealtimeListener(appValRepository)
  const numberOfGames = appValues ? appValues.numberOfGames : 0
  const { games, loadMore } = usePaginatedGames({
    init: initGames,
    gameRepository,
  })

  const props: TemplateProps = {
    games,
    numberOfGames,
    onLoadMore: loadMore,
    ...formProps,
  }

  return <HomePageTemplate {...props} />
}
