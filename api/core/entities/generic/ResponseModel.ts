import { ILogger } from '../../interfaces';

export default class ResponseModel<T> {
  private data!: T[];

  // private logger: ILogger;

  constructor(logger?: ILogger) {
    // this.logger = logger;
  }

  public setData(data: T[]): this {
    this.data = data;
    return this;
  }

  public getData(): T[] {
    return this.data;
  }
}
