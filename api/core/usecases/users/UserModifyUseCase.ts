import { IUserProps } from '../../interfaces';
import IUseCase from '../../interfaces/IUseCase';
import { ResponseModel, ModelAttributes } from '../../entities';
import { User } from '../../entities';
import UserLocalSync from '../../../infrastructure/data/repositories/UserLocalSync';
import faker from 'faker';
import { UserNotFoundError } from '../../entities/errors/UserNotFoundError';
import Database from '../../../infrastructure/data/Database';

export default class UsersModifyUseCase implements IUseCase<IUserProps> {
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

      const userOnDb = user.fetch(id!);

      if (!userOnDb) throw new UserNotFoundError();

      return responseModel.setData([await user.update(id!, body!)]);
    } catch (error) {
      throw error;
    }
  }
}
