export default interface ISync<T> {
  findAll(): Promise<T[]>;
  fetch(id: number): Promise<T>;
  create(model: T): Promise<number>;
  update(id: number, model: T): Promise<number>;
  delete(id: number): Promise<T>;
}
