import { Model, Collection, ResponseModel } from "../entities";

export default interface IAbstractEntityFactory<T> {
  createEntity(): Model<T>;
  createCollection(): Collection<T>;
  createResponseModel(): ResponseModel<T>;
}
