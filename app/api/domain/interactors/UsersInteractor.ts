import UsersOverviewUseCase from "../usecases/UsersOverviewUseCase";
import EntityFactory from "../factories/DomainEntityFactory";
import IUserProps from "../interfaces/IUserProps";
import UserProfileUseCase from "../usecases/UserProfileUseCase";
import IUserFoodRelation from "../interfaces/IUserFoodRelation";
import UserTasterUseCase from "../usecases/UserTastesUseCase";

export default class UserInteractor {
  private usersOverviewUseCase: UsersOverviewUseCase;
  private userProfileUseCase: UserProfileUseCase;
  private userTastesUseCase: UserTasterUseCase

  constructor(entityFactory: EntityFactory) {
    this.usersOverviewUseCase = new UsersOverviewUseCase(entityFactory);
    this.userProfileUseCase = new UserProfileUseCase(entityFactory);
    this.userTastesUseCase = new UserTasterUseCase(entityFactory);
  }

  public async executeUsersOverview(): Promise<IUserProps[]> {
    return await this.usersOverviewUseCase.execute();
  }

  public async executeGetUserProfile(id: string): Promise<IUserProps> {
      return await this.userProfileUseCase.execute(id)
  }

  public async executeGetUserFoods(id: string): Promise<IUserFoodRelation[]> {
    return await this.userTastesUseCase.execute(id);
  }

  public async executeEditUser(id: string, body: any): Promise<IUserProps> {
    return await this.userEditUseCase.execute(id, body);
  }
}
