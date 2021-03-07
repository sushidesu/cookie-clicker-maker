import { ApplicationValue, Game } from "domain/entity"

export interface IGameRepository {
  addGame: (game: Omit<Game, "id">) => void
  removeGame: (gameId: string) => void
  getGames: (props: GetGamesProps) => Promise<PaginatedGames>
  getGame: (gameId: string) => Promise<Game | undefined>
}

export type GetGamesProps = {
  index: number
  limit: number
}

export type PaginatedGames = {
  games: Game[]
  nextIndex: PaginationIndex
  prevIndex: PaginationIndex
  numberOfGames: number
}

type PaginationIndex = number | null | undefined

/* --- */

export interface IApplicationValueRepository {
  getApplicationValue: () => Promise<ApplicationValue>
  incrementNumberOfGames: () => void
}
