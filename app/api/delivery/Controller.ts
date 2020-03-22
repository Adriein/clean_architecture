import UsersInteractor from "../domain/interactors/UsersInteractor";
import EntityFactory from "../factories/UserEntityFactory";
import IUserProps from "../domain/interfaces/IUserProps";
import ResponseModel from "../domain/entities/ResponseModel";

export default class Controller {
  private usersInteractor: UsersInteractor;

  constructor() {
    this.usersInteractor = new UsersInteractor();
  }

  public async getAllUsersProfiles(): Promise<ResponseModel<IUserProps>> {
    return await this.usersInteractor.executeUsersOverview();
  }

  public async getUserProfile(id: string): Promise<ResponseModel<IUserProps>> {
    return await this.usersInteractor.executeGetUserProfile(id);
  }

  public async editUser(id: string, body: any): Promise<ResponseModel<IUserProps>> {
    return await this.usersInteractor.executeEditUser(id, body);
  }

  public async createUser(body: any): Promise<ResponseModel<IUserProps>> {
    return await this.usersInteractor.executeCreateUser(body);
  }

  public async deleteUser(id: number): Promise<ResponseModel<IUserProps>> {
    return await this.usersInteractor.executeDeleteUser(id);
  }
}
