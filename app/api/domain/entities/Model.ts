import ISearchParams from "../interfaces/ISearchParams";
import ISync from "../interfaces/ISync";
import IAttributes from "../interfaces/IAttributes";
import IEntity from "../interfaces/IEntity";

export default class Model<T> implements IEntity{
  constructor(private attributes: IAttributes<T>, private sync: ISync<T>) {}

  get get() {
    return this.attributes.get;
  }

  set(data: T) {
    this.attributes.set(data);
  }

  protected async fetch(id: number, type: string): Promise<void> {
    this.attributes.set(await this.sync.fetch(id, type));
  }

  // protected async updateModel(id: number, model: T): Promise<T>{
  //   this.sync.
  // }

  getAttributes(): T {
    return this.attributes.getAll();
  }

  public getSync(): ISync<T> {
    return this.sync;
  }
}
