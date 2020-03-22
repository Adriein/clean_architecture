import {
  UsersOverviewUseCase,
  UserProfileUseCase,
  UserEditUseCase,
  UserCreateUseCase,
  UserDeleteUseCase
} from "../usecases";
import { IAbstractEntityFactory, IUserProps } from "../interfaces";
import { ResponseModel } from "../entities";
import DomainEntityFactory from "../../factories/UserEntityFactory";

export default class UserInteractor {
  private usersOverviewUseCase: UsersOverviewUseCase;
  private userProfileUseCase: UserProfileUseCase;
  private userEditUseCase: UserEditUseCase;
  private userCreateUseCase: UserCreateUseCase;
  private userDeleteUseCase: UserDeleteUseCase;

  private domainEntityFactory: IAbstractEntityFactory<IUserProps>;
  private responseModel: ResponseModel<IUserProps>;

  constructor() {
    this.domainEntityFactory = new DomainEntityFactory();
    this.usersOverviewUseCase = new UsersOverviewUseCase(this.domainEntityFactory);
    this.userProfileUseCase = new UserProfileUseCase(this.domainEntityFactory);
    this.userEditUseCase = new UserEditUseCase(this.domainEntityFactory);
    this.userCreateUseCase = new UserCreateUseCase(this.domainEntityFactory);
    this.userDeleteUseCase = new UserDeleteUseCase(this.domainEntityFactory);

    this.responseModel = this.domainEntityFactory.createResponseModel();
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
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }
}
