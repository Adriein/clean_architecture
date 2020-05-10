import { ISync, IAttributes } from "../interfaces";

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
    this.attributes.set(await this.sync.update(id, data));
  }

  public async create(model: T): Promise<void> {
    this.attributes.set(await this.sync.create(model));
  }

  public async delete(id: number): Promise<void> {
    this.attributes.set(await this.sync.delete(id));
  }

  public getAttributes(): T {
    return this.attributes.getAll();
  }

  public async findBy(options?: Object) {
    return await this.sync.findBy(options);
  }
}
