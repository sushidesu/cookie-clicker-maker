export interface Game {
  id: string
  createdBy: string
  name: string
  icon: string
  backgroundColor: string
}

export type PrimaryGame = Omit<Game, "id">

export interface Background {
  pattern: "DEFAULT"
  primaryColor: string
  secondaryColor: string
}

/* --- */

export interface ApplicationValue {
  numberOfGames: number
}
