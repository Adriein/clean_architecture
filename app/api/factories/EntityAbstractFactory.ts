import {
  User,
  UserCollection,
  ModelAttributes,
  ResponseModel,
  FoodUserRelation,
  Food,
  FoodCollection
} from "../domain/entities";
import { IAbstractFactory, IUserProps, IFoodProps, IFoodUserRelation } from "../domain/interfaces";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import FoodUserLocalSync from "../infrastructure/data/FoodUserLocalSync";
import FoodLocalSync from "../infrastructure/data/FoodLocalSync";
import Logger from "../infrastructure/logs/Logger";

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

  createFoodUserRelation(): FoodUserRelation {
    return new FoodUserRelation(new ModelAttributes({}), new FoodUserLocalSync());
  }
}
