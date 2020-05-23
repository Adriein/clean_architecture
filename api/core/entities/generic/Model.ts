import { ISync, IAttributes } from '../../interfaces';

export default abstract class Model<T> {
  constructor(private attributes: IAttributes<T>, private sync: ISync<T>) {}

  get get(): <K extends keyof T>(propName: K) => T[K] {
    return this.attributes.get;
  }

  set(data: T): void {
    this.attributes.set(data);
  }

  async fetch(id: number): Promise<T> {
    this.attributes.set(await this.sync.fetch(id));
    return this.attributes.getAll();
  }

  async update(id: number, data: T): Promise<T> {
    this.attributes.set(await this.sync.update(id, data));
    return this.attributes.getAll();
  }

  async create(model: T): Promise<T> {
    this.attributes.set(await this.sync.create(model));
    return this.attributes.getAll();
  }

  async delete(id: number): Promise<number> {
    return await this.sync.delete(id);
  }

  async find(): Promise<T[]> {
    return await this.sync.find();
  }

  get attr(): T {
    return this.attributes.getAll();
  }
}
