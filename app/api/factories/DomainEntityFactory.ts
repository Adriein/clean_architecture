import User from "../domain/entities/User";
import UserCollection from "../domain/entities/UserCollection";
import ModelAttributes from "../domain/entities/ModelAttributes";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import IAbstractEntityFactory from "../domain/interfaces/IAbstractEntityFactory";
import IUserProps from "../domain/interfaces/IUserProps";
import ResponseModel from "../domain/entities/ResponseModel";
import Logger from "../infrastructure/logs/Logger";

export default class DomainEntityFactory implements IAbstractEntityFactory<IUserProps> {
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
