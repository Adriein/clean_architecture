import { IUserProps, IAbstractFactory, IFoodUserRelation, IFoodProps } from "../../interfaces";
import { Model } from "../../entities";
export default class UserProfileUseCase {
  private user!: Model<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(id: string): Promise<IUserProps> {
    this.user = this.entityFactory.createUser();

    //fetch the user
    await this.user.fetch(parseInt(id));
    const user = this.user.getAttributes();

    if (user != undefined) {
      return user;
    } else {
      throw new Error("user not found");
    }
  }
}
