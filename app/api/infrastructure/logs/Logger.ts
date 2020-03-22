import ILogger from "../../domain/interfaces/ILogger";
import TableLog from "../data/entity/TableLog";
import Database from "../data/Database";

export default class Logger implements ILogger {
  private _level!: string;
  private _stack!: string;
  private db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  log(message: string) {
    const log = new TableLog();
    log.level = this._level;
    log.stack_trace = this._stack;
    log.message = message;
    this.db.connection.getRepository(TableLog).save(log);
  }

  stack(stack: string = 'not stack setted'): this {
    this._stack = stack;
    return this;
  }

  level(level: string): this {
    this._level = level;
    return this;
  }
}
