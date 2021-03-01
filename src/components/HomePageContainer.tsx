import { useState } from "react"
import Head from "next/head"
import { Game, PrimaryGame } from "domain/entity"
import { Layout } from "components/Layout"
import { GameCreateForm, Props as FormProps } from "components/GameCreateForm"
import { GameRepository } from "infrastructure/gameRepository"
import { database } from "plugins/firebaseApp"

export type Props = {
  games: Game[]
  numberOfGames: number
}

type FormValue = Pick<Game, "name" | "createdBy" | "icon" | "backgroundColor">

export function HomePageContainer({ games }: Props) {
  const gameRepository = new GameRepository(database)
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    createdBy: "",
    icon: "",
    backgroundColor: "#000000",
  })

  const handleSubmit: FormProps["onSubmit"] = (event) => {
    event.preventDefault()
    const newGame: PrimaryGame = {
      ...formValue,
    }
    gameRepository.addGame(newGame)
  }
  const makeHandleBlur: (name: keyof FormValue) => FormProps["onNameBlur"] = (
    name,
  ) => (event) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
    event.target.value
  }
  const handleIconSelect = (icon: string) => {
    setFormValue((prev) => ({
      ...prev,
      icon: icon,
    }))
  }

  return (
    <Layout>
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
        <GameCreateForm
          onSubmit={handleSubmit}
          onNameBlur={makeHandleBlur("name")}
          onCreatedByBlur={makeHandleBlur("createdBy")}
          onIconSelect={handleIconSelect}
          onBackgroundColorBlur={makeHandleBlur("backgroundColor")}
        />
      </main>
    </Layout>
  )
}
