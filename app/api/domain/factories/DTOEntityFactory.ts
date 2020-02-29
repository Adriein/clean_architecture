import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";
import IEntity from "../interfaces/IEntity";
import Users from "../../infrastructure/data/entity/DTOUser";
import Food from "../../infrastructure/data/entity/DTOFood";

export default class DTOEntityFactory implements IAbstractEntityFactory {
    createUsersCollection(): IEntity{
        throw new Error();
    }

    createUser(): IEntity{
        return new Users();
    }

    createFood(): IEntity {
        return new Food();
    }
}