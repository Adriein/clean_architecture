import { ResponseModel } from '../entities';

export default interface IUseCase<T> {
  execute(id?: number, body?: T): Promise<ResponseModel<T>>;
}
