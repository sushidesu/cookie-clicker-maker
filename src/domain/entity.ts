export interface Game {
  id: string
  createdBy: string
  name: string
  icon: string
  background: Background
}

export interface Background {
  pattern: "DEFAULT"
  primaryColor: string
  secondaryColor: string
}
