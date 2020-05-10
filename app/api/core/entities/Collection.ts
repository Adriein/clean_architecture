import { ISync } from "../interfaces";

export default abstract class Collection<T> {
  constructor(protected collection: T[], protected sync: ISync<T>) {}

  async create(): Promise<void> {
    const models = await this.sync.findAll();
    for (const model of models) {
      this.collection.push(model);
    }
  }

  public getCollection(): T[] {
    return this.collection;
  }
}
