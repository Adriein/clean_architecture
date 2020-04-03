import { createConnection, Connection } from "typeorm";
import { TableUser, TableFood, TableUserToFood, TableLog } from "./entity";

export default class Database {
  private static instance: Database;
  private _connection!: Connection;

  private constructor() {
    this.setUpDataBase();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    
    return Database.instance;
  }

  private async setUpDataBase(): Promise<void> {
    this._connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: [TableUser, TableFood, TableUserToFood, TableLog],
      synchronize: true
    });
  }

  public get connection(): Connection {
    return this._connection;
  }
}
