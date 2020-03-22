import UsersOverviewUseCase from "../usecases/UsersOverviewUseCase";
import IUserProps from "../interfaces/IUserProps";
import UserProfileUseCase from "../usecases/UserProfileUseCase";
import UserEditUseCase from "../usecases/UserEditUseCase";
import UserCreateUseCase from "../usecases/UserCreateUseCase";
import ResponseModel from "../entities/ResponseModel";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";
import UserDeleteUseCase from "../usecases/UserDeleteUseCase";

export default class UserInteractor {
  private usersOverviewUseCase: UsersOverviewUseCase;
  private userProfileUseCase: UserProfileUseCase;
  private userEditUseCase: UserEditUseCase;
  private userCreateUseCase: UserCreateUseCase;
  private userDeleteUseCase: UserDeleteUseCase;
  private responseModel: ResponseModel<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.usersOverviewUseCase = new UsersOverviewUseCase(entityFactory);
    this.userProfileUseCase = new UserProfileUseCase(entityFactory);
    this.userEditUseCase = new UserEditUseCase(entityFactory);
    this.userCreateUseCase = new UserCreateUseCase(entityFactory);
    this.userDeleteUseCase = new UserDeleteUseCase(entityFactory);
    this.responseModel = entityFactory.createResponseModel();
  }

  public async executeUsersOverview(): Promise<ResponseModel<IUserProps>> {
    try {
      return this.responseModel.setData(await this.usersOverviewUseCase.execute()).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeGetUserProfile(id: string): Promise<ResponseModel<IUserProps>> {
    try {
      return this.responseModel.setData([await this.userProfileUseCase.execute(id)]).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeEditUser(id: string, body: any): Promise<ResponseModel<IUserProps>> {
    try {
      return this.responseModel
        .setData([await this.userEditUseCase.execute(id, body)])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeCreateUser(body: any): Promise<ResponseModel<IUserProps>> {
    try {
      return this.responseModel
        .setData([await this.userCreateUseCase.execute(body)])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeDeleteUser(id: number): Promise<ResponseModel<IUserProps>> {
    try {
      return this.responseModel.setData([await this.userDeleteUseCase.execute(id)]).setStatus(200);
    }catch(error) {
      return this.responseModel.setError(error);
    }
  }
}
