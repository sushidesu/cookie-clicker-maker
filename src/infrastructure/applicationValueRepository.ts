import firebase from "firebase"
import { ApplicationValue } from "domain/entity"
import { IApplicationValueRepository } from "domain/repository"

export class ApplicationValueRepository implements IApplicationValueRepository {
  private APP_VALUE_PATH = "applicationValue"
  private NUMBER_OF_GAMES_PATH = "numberOfGames"
  private applicationValueReference: firebase.database.Reference

  constructor(databaseInstance: firebase.database.Database) {
    this.applicationValueReference = databaseInstance.ref(this.APP_VALUE_PATH)
  }

  async getApplicationValue() {
    const appValueSnapshot = await this.applicationValueReference.once("value")
    return appValueSnapshot.val() as ApplicationValue
  }

  incrementNumberOfGames() {
    this.applicationValueReference
      .child(this.NUMBER_OF_GAMES_PATH)
      .set(firebase.database.ServerValue.increment(1))
  }
}
