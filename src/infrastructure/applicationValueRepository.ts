import firebase from "firebase/app"
import { ApplicationValue } from "domain/entity"
import { IApplicationValueRepository, Listener } from "domain/repository"

export class ApplicationValueRepository implements IApplicationValueRepository {
  private COMMON_PATH = "common"
  private APP_VALUE_PATH = "applicationValue"
  private NUMBER_OF_GAMES_PATH = "numberOfGames"
  private applicationValueReference: firebase.database.Reference

  constructor(databaseInstance: firebase.database.Database) {
    this.applicationValueReference = databaseInstance.ref(this.COMMON_PATH)
  }

  async getApplicationValue(): Promise<ApplicationValue> {
    const appValueSnapshot = await this.applicationValueReference
      .child(this.APP_VALUE_PATH)
      .once("value")
    return appValueSnapshot.val() as ApplicationValue
  }

  subscribe(listener: Listener<ApplicationValue>): void {
    this.applicationValueReference.on("child_changed", (snapshot) => {
      listener(snapshot.val())
    })
    this.applicationValueReference.on("child_added", (snapshot) => {
      listener(snapshot.val())
    })
  }
  unSubscribe(): void {
    this.applicationValueReference.off()
  }

  incrementNumberOfGames(): void {
    this.applicationValueReference
      .child(this.APP_VALUE_PATH)
      .child(this.NUMBER_OF_GAMES_PATH)
      .set(firebase.database.ServerValue.increment(1))
  }
}
