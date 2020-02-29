import User from "../entities/User";
import UserCollection from "../entities/UserCollection";
import ModelAttributes from "../entities/ModelAttributes";
import LocalSync from "../../infrastructure/data/LocalSync";
import Food from "../entities/Food";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";


export default class EntityFactory implements IAbstractEntityFactory{

    createUser(): User {
        return new User(new ModelAttributes({}), new LocalSync());
    }

    createUsersCollection(): UserCollection {
        return new UserCollection(new LocalSync());
    }

    createFood(): Food {
        return new Food(new ModelAttributes({}), new LocalSync());
    }

}