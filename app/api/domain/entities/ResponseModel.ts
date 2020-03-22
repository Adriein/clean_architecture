import { ILogger } from "../interfaces";

export default class ResponseModel<T> {
  private status!: number;
  private data!: T[];
  private error!: string;
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  public setStatus(status: number): this {
    this.status = status;
    return this;
  }

  public getStatus(): number {
    return this.status;
  }

  public setData(data: T[]): this {
    this.data = data;
    return this;
  }

  public getData(): T[] {
    return this.data;
  }

  public setError(error: Error): this {
    this.error = error.message;
    if (error.message.includes("not found")) {
      this.setStatus(404);
    } else {
      this.setStatus(500);
    }
    this.logger
      .stack(error.stack)
      .level("error")
      .log(error.message);
    return this;
  }

  public getError(): string {
    return this.error;
  }
}
