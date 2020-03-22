//import mysql, { Connection } from "mysql";
import { createConnection, Connection } from "typeorm";
import TableUser from "./entity/TableUser";
import TableFood from "./entity/TableFood";
import TableUserToFood from "./entity/TableUserToFood";
import TableLog from "./entity/TableLog";
//import util from "util";

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

  private setUpDataBase(): void {
    // return mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "root",
    //   database: "nutrition_manager"
    // });

    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: [TableUser, TableFood, TableUserToFood, TableLog],
      synchronize: true
    }).then(connection => (this._connection = connection));
  }

  public get connection(): Connection {
  //   return util
  //     .promisify(this.connection.query)
  //     .call(this.connection, sqlStatement);
    return this._connection;
  }
  // }
}
