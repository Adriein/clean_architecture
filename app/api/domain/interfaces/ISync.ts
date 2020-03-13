export default interface ISync<T> {
  fetch(id: number): Promise<T>;
  create(model: T): Promise<void>;
  // // findOne(searchParams: SearchParameters): Promise<T>;
  //find(searchParams: ISearchParams): Promise<T[]>;
  update(id: number, model: T): Promise<void>;
  findAll(): Promise<T[]>;
}
