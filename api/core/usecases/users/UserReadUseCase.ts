import { IUserProps } from '../../interfaces';
import IUseCase from '../../interfaces/IUseCase';
import { ResponseModel, ModelAttributes } from '../../entities';
import { User } from '../../entities';
import UserLocalSync from '../../../infrastructure/data/repositories/UserLocalSync';
import { UserNotFoundError } from '../../entities/errors/UserNotFoundError';
import Database from '../../../infrastructure/data/Database';

export default class UsersReadUseCase implements IUseCase<IUserProps> {
  constructor(private database: Database) {
    this.database = database;
  }
  public async execute(
    id?: number,
    body?: IUserProps
  ): Promise<ResponseModel<IUserProps>> {
    try {
      const user = new User(
        new ModelAttributes({}),
        new UserLocalSync(this.database)
      );
      const responseModel = new ResponseModel<IUserProps>();

      return responseModel.setData([await user.fetch(id!)]);
    } catch (error) {
      console.log(error);

      throw new UserNotFoundError();
    }
  }
}
