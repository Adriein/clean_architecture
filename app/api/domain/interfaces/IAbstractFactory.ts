import { Model, Collection, ResponseModel } from "../entities";
import { IUserProps, IFoodProps, IFoodUserRelation } from ".";

export default interface IAbstractFactory {
  createUser(): Model<IUserProps>;
  createUserCollection(): Collection<IUserProps>;
  createUserResponseModel(): ResponseModel<IUserProps>;

  createFood(): Model<IFoodProps>;
  createFoodCollection(): Collection<IFoodProps>;
  createFoodResponseModel(): ResponseModel<IFoodProps>;

  createFoodUserRelation(): Model<IFoodUserRelation>;
}
