import UsersInteractor from "../domain/interactors/UsersInteractor";
import IUserProps from "../domain/interfaces/IUserProps";
import ResponseModel from "../domain/entities/ResponseModel";
import { IFoodProps } from "../domain/interfaces";
import FoodsInteractor from "../domain/interactors/FoodsInteractor";
import IDietProps from "../domain/interfaces/IDietProps";
import DietInteractor from "../domain/interactors/DietInteractor";

export default class Controller {
  private usersInteractor: UsersInteractor;
  private foodsInteractor: FoodsInteractor;
  private dietInteractor: DietInteractor;

  constructor() {
    this.usersInteractor = new UsersInteractor();
    this.foodsInteractor = new FoodsInteractor();
    this.dietInteractor = new DietInteractor();
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

  public async getAllFoods(): Promise<ResponseModel<IFoodProps>> {
    return await this.foodsInteractor.executeFoodsList();
  }

  public async retriveFood(id: string): Promise<ResponseModel<IFoodProps>> {
    return await this.foodsInteractor.executeRetriveFood(parseInt(id));
  }

  public async createFood(body: any): Promise<ResponseModel<IFoodProps>> {
    return await this.foodsInteractor.executeCreateFood(body);
  }

  public async updateFood(id: string, body: any): Promise<ResponseModel<IFoodProps>> {
    return await this.foodsInteractor.executeUpdateFood(parseInt(id), body);
  }

  public async createDiet(body: any):Promise<ResponseModel<IDietProps>> {
    return await this.dietInteractor.executeCreateDiet(body);
  }
}
