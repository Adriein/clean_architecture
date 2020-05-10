import {
  UsersOverviewUseCase,
  UserProfileUseCase,
  UserEditUseCase,
  UserCreateUseCase,
  UserDeleteUseCase,
} from "../usecases";
import { IUserProps, IAbstractFactory } from "../interfaces";
import { ResponseModel } from "../entities";

import EntityAbstractFactory from "../../factories/EntityAbstractFactory";

export default class UserInteractor {
  private usersOverviewUseCase: UsersOverviewUseCase;
  private userProfileUseCase: UserProfileUseCase;
  private userEditUseCase: UserEditUseCase;
  private userCreateUseCase: UserCreateUseCase;
  private userDeleteUseCase: UserDeleteUseCase;

  private entityFactory: IAbstractFactory;

  private responseModel!: ResponseModel<IUserProps>;

  constructor() {
    this.entityFactory = new EntityAbstractFactory();

    this.usersOverviewUseCase = new UsersOverviewUseCase(this.entityFactory);
    this.userProfileUseCase = new UserProfileUseCase(this.entityFactory);
    this.userEditUseCase = new UserEditUseCase(this.entityFactory);
    this.userCreateUseCase = new UserCreateUseCase(this.entityFactory);
    this.userDeleteUseCase = new UserDeleteUseCase(this.entityFactory);
  }

  public async executeUsersOverview(): Promise<ResponseModel<IUserProps>> {
    try {
      this.responseModel = this.entityFactory.createUserResponseModel();
      return this.responseModel.setData(await this.usersOverviewUseCase.execute()).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeGetUserProfile(id: string): Promise<ResponseModel<IUserProps>> {
    try {
      this.responseModel = this.entityFactory.createUserResponseModel();
      return this.responseModel.setData([await this.userProfileUseCase.execute(id)]).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeEditUser(id: string, body: any): Promise<ResponseModel<IUserProps>> {
    try {
      this.responseModel = this.entityFactory.createUserResponseModel();
      return this.responseModel
        .setData([await this.userEditUseCase.execute(id, body)])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeCreateUser(body: any): Promise<ResponseModel<IUserProps>> {
    try {
      this.responseModel = this.entityFactory.createUserResponseModel();
      return this.responseModel
        .setData([await this.userCreateUseCase.execute(body)])
        .setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }

  public async executeDeleteUser(id: number): Promise<ResponseModel<IUserProps>> {
    try {
      this.responseModel = this.entityFactory.createUserResponseModel();
      return this.responseModel.setData([await this.userDeleteUseCase.execute(id)]).setStatus(200);
    } catch (error) {
      return this.responseModel.setError(error);
    }
  }
}
