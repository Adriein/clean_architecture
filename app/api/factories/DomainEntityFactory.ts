import User from "../domain/entities/User";
import UserCollection from "../domain/entities/UserCollection";
import ModelAttributes from "../domain/entities/ModelAttributes";
import UserLocalSync from "../infrastructure/data/UserLocalSync";
import IAbstractEntityFactory from "../domain/interfaces/IAbstractEntityFactory";


export default class EntityFactory implements IAbstractEntityFactory{

    createUser(): User {
        return new User(new ModelAttributes({}), new UserLocalSync());
    }

    createUsersCollection(): UserCollection {
        return new UserCollection(new UserLocalSync());
    }
}