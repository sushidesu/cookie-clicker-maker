import Head from "next/head"
import { Game } from "domain/entity"
import { GameCreateForm } from "components/GameCreateForm"

export type Props = {
  games: Game[]
  numberOfGames: number
}

export function HomePageTemplate({ games }: Props) {
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
                className="flex flex-col items-start mt-4 mx-auto p-6 max-w-sm bg-white rounded-xl shadow-md space-y-2"
              >
                <p className="font-semibold">{game.name}</p>
                <p>{`作成者: ${game.createdBy}`}</p>
              </div>
            ))}
          </div>
        </div>
        <GameCreateForm onSubmit={(event) => event.preventDefault()} />
      </main>
    </div>
  )
}
