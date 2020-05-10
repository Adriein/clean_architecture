import { Model, Collection, ResponseModel, Food, Meal } from "../entities";
import { IUserProps, IFoodProps, IMealProps } from ".";
import Diet from "../entities/Diet";
import IDietProps from "./IDietProps";

export default interface IAbstractFactory {
  createUser(): Model<IUserProps>;
  createUserCollection(): Collection<IUserProps>;
  createUserResponseModel(): ResponseModel<IUserProps>;

  createFood(): Food;
  createFoodCollection(): Collection<IFoodProps>;
  createFoodResponseModel(): ResponseModel<IFoodProps>;

  createMeal(body: IMealProps): Meal;

  createDiet(body: IDietProps): Diet;
  createDietReponseModel(): ResponseModel<IDietProps>;
}
