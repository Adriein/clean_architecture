import {
  IAbstractFactory,
  IUserProps,
  IFoodProps,
  IDietProps,
  IMealProps,
} from "../domain/interfaces";
import {
  User,
  UserCollection,
  ModelAttributes,
  ResponseModel,
  Food,
  FoodCollection,
  Meal,
} from "../domain/entities";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import FoodLocalSync from "../infrastructure/data/FoodLocalSync";
import Logger from "../infrastructure/logs/Logger";
import Diet from "../domain/entities/Diet";
import DietLocalSync from "../infrastructure/data/DietLocalSync";
import MealLocalSync from "../infrastructure/data/MealLocalSync";

export default class EntityAbstractFactory implements IAbstractFactory {
  createUser(): User {
    return new User(new ModelAttributes({}), new UserLocalSync());
  }

  createUserCollection(): UserCollection {
    return new UserCollection(new UserLocalSync());
  }

  createUserResponseModel(): ResponseModel<IUserProps> {
    return new ResponseModel(new Logger());
  }

  createFood(): Food {
    return new Food(new ModelAttributes({}), new FoodLocalSync());
  }

  createFoodCollection(): FoodCollection {
    return new FoodCollection(new FoodLocalSync());
  }

  createFoodResponseModel(): ResponseModel<IFoodProps> {
    return new ResponseModel(new Logger());
  }

  createMeal(body:IMealProps): Meal {
    return new Meal(new ModelAttributes(body), new MealLocalSync(), this);
  }

  createDiet(body: IDietProps): Diet {
    return new Diet(new ModelAttributes(body), new DietLocalSync(), this);
  }

  createDietReponseModel(): ResponseModel<IDietProps> {
    return new ResponseModel(new Logger());
  }
}
