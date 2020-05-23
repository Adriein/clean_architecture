import { IUserProps } from '../../interfaces';
import IUseCase from '../../interfaces/IUseCase';
import { ResponseModel, ModelAttributes } from '../../entities';
import { User } from '../../entities';
import UserLocalSync from '../../../infrastructure/data/repositories/UserLocalSync';
import Database from '../../../infrastructure/data/Database';

export default class UsersOverviewUseCase implements IUseCase<IUserProps> {
  constructor(private database: Database) {
    this.database = database;
  }
  public async execute(): Promise<ResponseModel<IUserProps>> {
    const user = new User(
      new ModelAttributes({}),
      new UserLocalSync(this.database)
    );
    const responseModel = new ResponseModel<IUserProps>();
    return responseModel.setData(await user.find());
  }
}
