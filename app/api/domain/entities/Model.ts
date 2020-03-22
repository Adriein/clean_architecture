import {ISync,IAttributes} from "../interfaces";

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
    const modelId = await this.sync.update(id, data);
    this.attributes.set(await this.sync.fetch(modelId));
  }

  public async create(model: T): Promise<void> {
    const modelId = await this.sync.create(model);
    this.attributes.set(await this.sync.fetch(modelId));
  }

  public async delete(id: number): Promise<void> {
    this.attributes.set(await this.sync.delete(id));
  }

  public getAttributes(): T {
    return this.attributes.getAll();
  }
}
