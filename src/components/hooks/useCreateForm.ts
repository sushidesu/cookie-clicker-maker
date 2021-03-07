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
    if (Object.values(formValue).some((value) => value.length === 0)) {
      window.alert("ゲーム名・作成者名は必ず入力してください。")
      return
    } else if (Object.values(formValue).some((value) => value.length > 20)) {
      window.alert("20文字以内でお願いします。")
      return
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
