import ISync from "../interfaces/ISync";
import ISearchParams from "../interfaces/ISearchParams";
import IEntity from "../interfaces/IEntity";

export default class Collection<T> implements IEntity{
  constructor(private collection: T[], private sync: ISync<T>) {}

  protected async create(type: string): Promise<void> {
    const models = await this.sync.findAll(type);
    for (const model of models) {
      this.collection.push(model);
    }
  }

  public getCollection(): T[] {
    return this.collection;
  }
}
