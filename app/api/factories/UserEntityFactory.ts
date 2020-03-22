import { User, UserCollection, ModelAttributes, ResponseModel } from "../domain/entities";
import { IAbstractEntityFactory, IUserProps } from "../domain/interfaces";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import Logger from "../infrastructure/logs/Logger";

export default class UserEntityFactory implements IAbstractEntityFactory<IUserProps> {
  createEntity(): User {
    return new User(new ModelAttributes({}), new UserLocalSync());
  }

  createCollection(): UserCollection {
    return new UserCollection(new UserLocalSync());
  }

  createResponseModel(): ResponseModel<IUserProps> {
    return new ResponseModel(new Logger());
  }
}
