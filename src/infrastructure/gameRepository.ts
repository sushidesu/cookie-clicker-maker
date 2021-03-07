import firebase from "firebase/app"
import { Game, PrimaryGame } from "domain/entity"
import {
  IGameRepository,
  PaginatedGames,
  GetGamesProps,
  IApplicationValueRepository,
} from "domain/repository"

export class GameRepository implements IGameRepository {
  private GAME_PATH = "game"
  private gamesReference: firebase.database.Reference
  private appValueRepository: IApplicationValueRepository

  constructor(
    databaseInstance: firebase.database.Database,
    applicationValueRepository: IApplicationValueRepository,
  ) {
    this.gamesReference = databaseInstance.ref(this.GAME_PATH)
    this.appValueRepository = applicationValueRepository
  }

  addGame(game: PrimaryGame) {
    console.log(game)
    const key = this.gamesReference.push().key as string
    const newGame: Game = {
      ...game,
      id: key,
    }
    this.gamesReference.child(key).set(newGame)
    this.appValueRepository.incrementNumberOfGames()
  }

  removeGame() {
    // todo
  }

  async getGame(gameId: string): Promise<Game | undefined> {
    const gameSnapshot = await this.gamesReference.child(gameId).once("value")
    if (gameSnapshot.exists()) {
      return gameSnapshot.val() as Game
    } else {
      return undefined
    }
  }

  async getGames({ index, limit }: GetGamesProps) {
    const gameSnapshot = await this.gamesReference.once("value")
    const games = Object.values(gameSnapshot.val()) as Game[]
    const result: PaginatedGames = {
      nextIndex: null,
      prevIndex: null,
      numberOfGames: 0,
      games,
    }

    return result
  }
}
