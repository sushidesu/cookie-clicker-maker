import { useRouter } from "next/router"
// import { database } from "plugins/firebaseApp"
// import { GameRepository } from "infrastructure/gameRepository"
import { Layout } from "components/Layout"

export default function GamePage() {
  const router = useRouter()
  const { gid } = router.query

  // const gameRepository = new GameRepository(database)

  if (gid) {
    return (
      <Layout>
        <main>
          <div>
            <h1>Game Page</h1>
            <div>{gid}</div>
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
