import firebase from "firebase/app"
import { Game, PrimaryGame } from "domain/entity"
import {
  IGameRepository,
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
    return newGame
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

  async getGames({ limit, startAfterKey }: GetGamesProps) {
    const query = startAfterKey
      ? this.gamesReference
          .orderByKey()
          .endBefore(startAfterKey)
          .limitToFirst(limit)
      : this.gamesReference.orderByKey().limitToLast(limit)

    const gameSnapshot = await query.once("value")
    const games = Object.values(gameSnapshot.val() ?? {}) as Game[]
    return games.reverse()
  }
}
