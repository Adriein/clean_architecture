import UsersInteractor from "../domain/interactors/UsersInteractor";
import EntityFactory from "../domain/factories/DomainEntityFactory";
import IUserProps from "../domain/interfaces/IUserProps";
import IUserFoodRelation from "../domain/interfaces/IUserFoodRelation";

export default class Controller {
  private usersInteractor: UsersInteractor;

  constructor(entityFactory: EntityFactory) {
    this.usersInteractor = new UsersInteractor(entityFactory);
  }

  public async getAllUsersProfiles(): Promise<IUserProps[]> {
    return this.usersInteractor.executeUsersOverview();
  }

  public async getUserProfile(id: string): Promise<IUserProps> {
    return this.usersInteractor.executeGetUserProfile(id);
  }

  public async getUserFoods(id: string): Promise<IUserFoodRelation[]> {
    return this.usersInteractor.executeGetUserFoods(id);
  }

  public async editUser(id: string, body: any): Promise<IUserProps> {
    return this.usersInteractor.executeEditUser(id, body);
  }
}
