import Head from "next/head"
import { Game } from "domain/entity"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import { GameCard } from "components/GameCard"
import { Props as GameCreateFormProps } from "components/GameCreateForm"

export type Props = {
  games: Game[]
  numberOfGames: number
  onLoadMore: () => void
} & GameCreateFormProps

export function HomePageTemplate({
  games,
  numberOfGames,
  onLoadMore,
  ...rest
}: Props) {
  return (
    <Layout {...rest}>
      <Head>
        <title>Cookie Clicker Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center m-8">
            <h1 className="text-3xl font-bold">Cookie Clicker Maker</h1>
            <p>{`投稿されたゲームの総数: ${numberOfGames}`}</p>
            <div className="space-y-4">
              {games.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
            <button
              className="mt-10 px-4 py-2 font-bold bg-white rounded focus:outline-none shadow-md"
              onClick={onLoadMore}
            >
              もっと見る
            </button>
          </div>
        </Container>
      </main>
    </Layout>
  )
}
