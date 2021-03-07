import Head from "next/head"
import { Game } from "domain/entity"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import { GameCard } from "components/GameCard"
import {
  GameCreateForm,
  Props as GameCreateFormProps,
} from "components/GameCreateForm"

export type Props = {
  games: Game[]
  numberOfGames: number
  handleSubmit: GameCreateFormProps["onSubmit"]
  handleNameBlur: GameCreateFormProps["onNameBlur"]
  handleCreatedByBlur: GameCreateFormProps["onCreatedByBlur"]
  handleIconSelect: GameCreateFormProps["onIconSelect"]
  handleBackgroundColorBlur: GameCreateFormProps["onBackgroundColorBlur"]
}

export function HomePageTemplate({
  games,
  numberOfGames,
  handleSubmit,
  handleNameBlur,
  handleCreatedByBlur,
  handleIconSelect,
  handleBackgroundColorBlur,
}: Props) {
  return (
    <Layout>
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
          </div>
          <GameCreateForm
            onSubmit={handleSubmit}
            onNameBlur={handleNameBlur}
            onCreatedByBlur={handleCreatedByBlur}
            onIconSelect={handleIconSelect}
            onBackgroundColorBlur={handleBackgroundColorBlur}
          />
        </Container>
      </main>
    </Layout>
  )
}
