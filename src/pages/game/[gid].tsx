import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Game } from "domain/entity"
import { database } from "plugins/firebaseApp"
import { GameRepository } from "infrastructure/gameRepository"
import { Layout } from "components/Layout"
import { Emoji } from "emoji-mart"

export default function GamePage() {
  const [game, setGame] = useState<Game | null | undefined>(null)
  const router = useRouter()
  const { gid } = router.query
  const gameRepository = new GameRepository(database)

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
    return (
      <Layout>
        <main>
          <div>
            <h1>Game Page</h1>
            <div className="flex flex-col items-center mt-4 mx-auto p-6 max-w-sm bg-white rounded-xl shadow-md cursor-pointer space-y-2">
              <p className="font-semibold">{game.name}</p>
              <Emoji emoji={game.icon} set="twitter" size={64} />
              <p>{`作成者: ${game.createdBy}`}</p>
            </div>
          </div>
        </main>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div>not found</div>
      </Layout>
    )
  }
}
