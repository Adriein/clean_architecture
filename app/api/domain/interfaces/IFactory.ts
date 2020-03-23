import { Model } from "../entities";

export default interface IFactory<T> {
  create(): Model<T>;
}
