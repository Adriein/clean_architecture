import { Connection, ConnectionManager } from 'typeorm';
import { UserSchema } from './schemas';

export default class Database {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = new ConnectionManager();
  }

  private isConnected(): boolean {
    return this.connectionManager.has('default') &&
      this.connectionManager.get('default')
      ? true
      : false;
  }
  public async connect(): Promise<Connection> {
    if (this.isConnected()) {
      return this.connectionManager.get('default');
    }
    const manager = this.connectionManager.create({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [UserSchema],
      synchronize: true,
    });
    console.log('Connection to DB established');
    return await manager.connect();
  }
}
