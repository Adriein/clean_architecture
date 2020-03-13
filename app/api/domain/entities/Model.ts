import ISync from "../interfaces/ISync";
import IAttributes from "../interfaces/IAttributes";

export default abstract class Model<T> {
  constructor(private attributes: IAttributes<T>, private sync: ISync<T>) {}

  public get get(): <K extends keyof T>(propName: K) => T[K] {
    return this.attributes.get;
  }

  public set(data: T): void {
    this.attributes.set(data);
  }

  public async fetch(id: number): Promise<void> {
    this.attributes.set(await this.sync.fetch(id));
  }

  public async update(id: number, data: T): Promise<void> {
    await this.sync.update(id, data);
  }

  public async create(model: T): Promise<void> {
    await this.sync.create(model);
  }

  public getAttributes(): T {
    return this.attributes.getAll();
  }

  public getSync(): ISync<T> {
    return this.sync;
  }
}
