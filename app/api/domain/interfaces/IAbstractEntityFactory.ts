import IEntity from "./IEntity";



export default interface IAbstractEntityFactory {
    createUser(): IEntity;
    createUsersCollection(): IEntity;
    createFood(): IEntity;
}