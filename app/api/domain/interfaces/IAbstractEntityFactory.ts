import IUserProps from "./IUserProps";
import Model from "../entities/Model";
import Collection from "../entities/Collection";



export default interface IAbstractEntityFactory {
    createUser(): Model<IUserProps>;
    createUsersCollection(): Collection<IUserProps>;
}