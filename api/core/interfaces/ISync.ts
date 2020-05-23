export default interface ISync<T> {
  find(params?: any): Promise<T[]>;
  fetch(id: number): Promise<T>;
  create(model: T): Promise<T>;
  update(id: number, model: T): Promise<T>;
  delete(id: number): Promise<number>;
}
