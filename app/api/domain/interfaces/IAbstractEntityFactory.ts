import Model from "../entities/Model";
import Collection from "../entities/Collection";
import ResponseModel from "../entities/ResponseModel";



export default interface IAbstractEntityFactory<T> {
    createEntity(): Model<T>;
    createCollection(): Collection<T>;
    createResponseModel(): ResponseModel<T>

}