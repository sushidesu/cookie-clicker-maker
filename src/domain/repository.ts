import { ApplicationValue, Game } from "domain/entity"

export interface IGameRepository {
  addGame: (game: Omit<Game, "id">) => Game
  removeGame: (gameId: string) => void
  getGames: (props: GetGamesProps) => Promise<Game[]>
  getGame: (gameId: string) => Promise<Game | undefined>
}

export type GetGamesProps = {
  limit: number
  startAfterKey?: string
}

export interface PaginatedGames {
  games: Game[]
  loadMore: () => Game[]
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
