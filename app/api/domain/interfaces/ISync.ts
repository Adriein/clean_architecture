export default interface ISync<T> {
  fetch(id: number, type: string): Promise<T>;
  // // findOne(searchParams: SearchParameters): Promise<T>;
  //find(searchParams: ISearchParams): Promise<T[]>;
  update(id: number, model: T): Promise<void>;
  findAll(type: string): Promise<T[]>;
}
