import { IUserProps } from '../../interfaces';
import IUseCase from '../../interfaces/IUseCase';
import { ResponseModel, ModelAttributes } from '../../entities';
import { User } from '../../entities';
import UserLocalSync from '../../../infrastructure/data/repositories/UserLocalSync';
import faker from 'faker';

export default class UsersCreateUseCase implements IUseCase<IUserProps> {
  public async execute(
    id?: number,
    body?: IUserProps
  ): Promise<ResponseModel<IUserProps>> {
    const user = new User(new ModelAttributes({}), new UserLocalSync());
    user.set(body!);
    user.set({ avatar: faker.image.avatar() });
    console.log(user.attr);
    const responseModel = new ResponseModel<IUserProps>();
    return responseModel.setData([await user.create(user.attr)]);
  }
}
