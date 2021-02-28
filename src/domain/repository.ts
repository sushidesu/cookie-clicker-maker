import { Game } from "domain/entity"

export interface IGameRepository {
  addGame: (game: Game) => void
  removeGame: (gameId: string) => void
  getGames: (props: GetGamesProps) => Promise<PaginatedGames>
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
