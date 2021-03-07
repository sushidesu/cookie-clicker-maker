import { useState } from "react"
import { Game, PrimaryGame } from "domain/entity"
import { IGameRepository } from "domain/repository"
import { Props } from "components/GameCreateForm"

type FormValue = Pick<Game, "name" | "createdBy" | "icon" | "backgroundColor">

export const useCreateForm = (gameRepository: IGameRepository): Props => {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    createdBy: "",
    icon: "",
    backgroundColor: "#000000",
  })
  const handleSubmit: Props["onSubmit"] = (event) => {
    event.preventDefault()
    const newGame: PrimaryGame = {
      ...formValue,
    }
    gameRepository.addGame(newGame)
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
