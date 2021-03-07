import { useState } from "react"
import { Game, PrimaryGame } from "domain/entity"
import {
  HomePageTemplate,
  Props as TemplateProps,
} from "components/templates/HomePageTemplate"
import { GameRepository } from "infrastructure/gameRepository"
import { database } from "plugins/firebaseApp"

export type Props = {
  games: Game[]
  numberOfGames: number
}

type FormValue = Pick<Game, "name" | "createdBy" | "icon" | "backgroundColor">

export function HomePageContainer({ games, numberOfGames }: Props) {
  const gameRepository = new GameRepository(database)
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    createdBy: "",
    icon: "",
    backgroundColor: "#000000",
  })

  const handleSubmit: TemplateProps["handleSubmit"] = (event) => {
    event.preventDefault()
    const newGame: PrimaryGame = {
      ...formValue,
    }
    gameRepository.addGame(newGame)
  }
  const makeHandleBlur: (
    name: keyof FormValue,
  ) => TemplateProps["handleNameBlur"] = (name) => (event) => {
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

  const props: TemplateProps = {
    games,
    numberOfGames,
    handleSubmit,
    handleNameBlur: makeHandleBlur("name"),
    handleCreatedByBlur: makeHandleBlur("createdBy"),
    handleIconSelect,
    handleBackgroundColorBlur: makeHandleBlur("backgroundColor"),
  }

  return <HomePageTemplate {...props} />
}
