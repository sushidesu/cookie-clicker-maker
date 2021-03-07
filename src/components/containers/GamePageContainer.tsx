import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/router"
import { Game } from "domain/entity"
import { database } from "plugins/firebaseApp"
import { GameRepository } from "infrastructure/gameRepository"
import { ApplicationValueRepository } from "infrastructure/applicationValueRepository"
import { useCreateForm } from "../hooks/useCreateForm"
import {
  GamePageTemplate,
  Props as TemplateProps,
} from "components/templates/GamePageTemplate"
import { GameNotFoundTemplate } from "components/templates/GameNotFoundTemplate"

export function GamePageContainer() {
  const [game, setGame] = useState<Game | null | undefined>(null)
  const [cookies, setCookies] = useState(0)
  const router = useRouter()
  const { gid } = router.query
  const appValueRepository = new ApplicationValueRepository(database)
  const gameRepository = new GameRepository(database, appValueRepository)

  const formProps = useCreateForm(gameRepository)

  const bakeCookie = useCallback(() => {
    setCookies((prev) => prev + 1)
  }, [setCookies])

  useEffect(() => {
    let canceled = false
    !(async () => {
      if (typeof gid === "string") {
        const result = await gameRepository.getGame(gid)
        if (!canceled) {
          setGame(result)
        }
      }
    })()
    return () => {
      canceled = true
    }
  }, [gid])

  if (game) {
    const props: TemplateProps = {
      game,
      onCookieClick: bakeCookie,
      cookies,
      ...formProps,
    }
    return <GamePageTemplate {...props} />
  } else {
    return <GameNotFoundTemplate {...formProps} />
  }
}
