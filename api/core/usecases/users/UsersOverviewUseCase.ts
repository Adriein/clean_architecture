import { IUserProps } from '../../interfaces';
import IUseCase from '../../interfaces/IUseCase';
import { ResponseModel, ModelAttributes } from '../../entities';
import { User } from '../../entities';
import UserLocalSync from '../../../infrastructure/data/repositories/UserLocalSync';

export default class UsersOverviewUseCase implements IUseCase<IUserProps> {
  public async execute(): Promise<ResponseModel<IUserProps>> {
    const user = new User(new ModelAttributes({}), new UserLocalSync());
    const responseModel = new ResponseModel<IUserProps>();
    return responseModel.setData(await user.find());
  }
}
