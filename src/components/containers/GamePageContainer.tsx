import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Game } from "domain/entity"
import { database } from "plugins/firebaseApp"
import { GameRepository } from "infrastructure/gameRepository"
import { ApplicationValueRepository } from "infrastructure/applicationValueRepository"
import { GamePageTemplate } from "components/templates/GamePageTemplate"
import { GameNotFoundTemplate } from "components/templates/GameNotFoundTemplate"

export function GamePageContainer() {
  const [game, setGame] = useState<Game | null | undefined>(null)
  const router = useRouter()
  const { gid } = router.query
  const appValueRepository = new ApplicationValueRepository(database)
  const gameRepository = new GameRepository(database, appValueRepository)

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
    return <GamePageTemplate game={game} />
  } else {
    return <GameNotFoundTemplate />
  }
}
