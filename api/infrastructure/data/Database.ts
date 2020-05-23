import { createConnection, Connection } from 'typeorm';
import { UserSchema } from './schemas';

export default class Database {
  private connection!: Connection;

  private async isConnected(): Promise<boolean> {
    return this.connection ? true : false;
  }
  public async connect(): Promise<Connection> {
    if (!this.isConnected()) {
      return this.connection;
    }

    return (this.connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [UserSchema],
      synchronize: true,
    }));
  }
}
