import IResponseModel from "./IResponseModel";

export default interface IUseCase<T> {
    execute(): IResponseModel<T>;
}