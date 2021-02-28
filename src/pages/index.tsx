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
        <title>Cookie Clicker Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center m-8">
          <h1 className="text-3xl font-bold">Cookie Clicker Maker</h1>
          <div className="space-y-4">
            {games.map((game, index) => (
              <div
                key={index}
                className="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-start space-y-2"
              >
                <p className="font-semibold">{game.name}</p>
                <p>{`作成者: ${game.createdBy}`}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
