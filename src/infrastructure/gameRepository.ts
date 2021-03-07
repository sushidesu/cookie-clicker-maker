import firebase from "firebase"
import { Game, PrimaryGame } from "domain/entity"
import {
  IGameRepository,
  PaginatedGames,
  GetGamesProps,
} from "domain/repository"

export class GameRepository implements IGameRepository {
  private GAME_PATH = "game"
  private databaseReference: firebase.database.Reference

  constructor(databaseInstance: firebase.database.Database) {
    this.databaseReference = databaseInstance.ref(this.GAME_PATH)
  }

  addGame(game: PrimaryGame) {
    console.log(game)
    const key = this.databaseReference.push().key as string
    const newGame: Game = {
      ...game,
      id: key,
    }
    this.databaseReference.child(key).set(newGame)
  }

  removeGame() {
    // todo
  }

  async getGame(gameId: string): Promise<Game | undefined> {
    const gameSnapshot = await this.databaseReference
      .child(gameId)
      .once("value")
    if (gameSnapshot.exists()) {
      return gameSnapshot.val() as Game
    } else {
      return undefined
    }
  }

  async getGames({ index, limit }: GetGamesProps) {
    const gameSnapshot = await this.databaseReference.once("value")
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
