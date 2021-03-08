import Head from "next/head"
import { Game } from "domain/entity"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import { GameCard } from "components/GameCard"
import { Props as GameCreateFormProps } from "components/GameCreateForm"
import { Meta } from "components/Meta"

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
}: Props): JSX.Element {
  return (
    <Layout {...rest}>
      <Head>
        <title>Cookie Clicker Maker</title>
        <link rel="icon" href="/favicon.ico" />
        <Meta />
      </Head>
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center mt-8">
            <h1 className="text-center text-3xl font-bold">
              <span className="inline-block">クッキークリッカー</span>
              <span className="inline-block">メーカー</span>
            </h1>
            <p className="mt-6 text-2xl">
              {`投稿されたゲームの総数: `}
              <span className="text-4xl">{numberOfGames}</span>
            </p>
            <div className="mt-4 space-y-4">
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
