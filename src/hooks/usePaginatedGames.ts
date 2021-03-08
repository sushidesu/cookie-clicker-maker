import { useState } from "react"
import { Game } from "domain/entity"
import { IGameRepository } from "domain/repository"

type Props = {
  init: Game[]
  gameRepository: IGameRepository
}

type PaginatedGames = {
  games: Game[]
  loadMore: () => void
}

export const usePaginatedGames = ({
  init,
  gameRepository,
}: Props): PaginatedGames => {
  const [games, setGames] = useState<Game[]>(init)
  const loadMore = async () => {
    const lastGame = games[games.length - 1]
    const result = await gameRepository.getGames({
      limit: 10,
      startAfterKey: lastGame.id,
    })
    if (result.length) {
      setGames((prev) => prev.concat(result))
    }
  }

  return {
    games,
    loadMore,
  }
}
