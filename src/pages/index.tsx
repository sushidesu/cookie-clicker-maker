import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { rdb } from "plugins/firebaseApp"
import { Game } from "domain/entity"

type Props = {
  games: Game[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gameSnapshot = await rdb.ref("/game").once("value")
  const games = Object.values(gameSnapshot.val()) as Game[]

  return {
    props: {
      games,
    },
  }
}

export default function Home({
  games,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Cookie Clicker Maker</h1>
        <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
          Start
        </button>
        <div>
          {games.map((game, index) => (
            <p key={index}>{game.name}</p>
          ))}
        </div>
      </main>
    </div>
  )
}
