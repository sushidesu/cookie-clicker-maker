import firebase from "firebase"
import { Game } from "domain/entity"
import {
  IGameRepository,
  PaginatedGames,
  GetGamesProps,
} from "domain/repository"

export class GameRepository implements IGameRepository {
  private databaseInstance: firebase.database.Database

  constructor(databaseInstance: firebase.database.Database) {
    this.databaseInstance = databaseInstance
  }

  addGame() {
    // todo
  }

  removeGame() {
    // todo
  }

  async getGames({ index, limit }: GetGamesProps) {
    const gameSnapshot = await this.databaseInstance.ref("/game").once("value")
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
