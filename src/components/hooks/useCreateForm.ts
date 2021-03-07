import { useState } from "react"
import Router from "next/router"
import { Game, PrimaryGame } from "domain/entity"
import { IGameRepository } from "domain/repository"
import { Props } from "components/GameCreateForm"

type FormValue = Pick<Game, "name" | "createdBy" | "icon" | "backgroundColor">

export const useCreateForm = (gameRepository: IGameRepository): Props => {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    createdBy: "",
    icon: ":cookie:",
    backgroundColor: "#000000",
  })

  const handleSubmit: Props["onSubmit"] = (event) => {
    event.preventDefault()
    const newGame: PrimaryGame = {
      ...formValue,
    }
    const result = gameRepository.addGame(newGame)
    Router.push(`/game/${result.id}`)
  }
  const makeHandleBlur: (name: keyof FormValue) => Props["onNameBlur"] = (
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

  return {
    onSubmit: handleSubmit,
    onNameBlur: makeHandleBlur("name"),
    onCreatedByBlur: makeHandleBlur("createdBy"),
    onIconSelect: handleIconSelect,
    onBackgroundColorBlur: makeHandleBlur("backgroundColor"),
  }
}
