export default interface IAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(propName: K): T[K];
  getAll(): T;
}
