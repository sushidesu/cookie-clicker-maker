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

export interface IApplicationValueRepository
  extends RealtimeListnable<ApplicationValue> {
  getApplicationValue: () => Promise<ApplicationValue>
  incrementNumberOfGames: () => void
}

/* --- */

export interface RealtimeListnable<T> {
  subscribe: (listener: Listener<T>) => void
  unSubscribe: () => void
}

export type Listener<T> = (newValue: T) => void
