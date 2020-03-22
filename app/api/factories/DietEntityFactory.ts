import { Food, UserCollection, ModelAttributes, ResponseModel } from "../domain/entities";
import { IAbstractEntityFactory, IFoodProps } from "../domain/interfaces";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import Logger from "../infrastructure/logs/Logger";

export default class UserEntityFactory implements IAbstractEntityFactory<IFoodProps> {
  createEntity(): Food {
    return new Food(new ModelAttributes({}), new UserLocalSync());
  }

  createCollection(): UserCollection {
    return new UserCollection(new UserLocalSync());
  }

  createResponseModel(): ResponseModel<IFoodProps> {
    return new ResponseModel(new Logger());
  }
}
