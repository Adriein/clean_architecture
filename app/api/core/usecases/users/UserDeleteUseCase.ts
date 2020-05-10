import { IUserProps, IAbstractFactory } from "../../interfaces";
import { Model } from "../../entities";

export default class UserDeleteUseCase {
  private user!: Model<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(id: number): Promise<IUserProps> {
    this.user = this.entityFactory.createUser();
    //Retrive user stored on db
    await this.user.fetch(id);

    if (this.user.getAttributes().user_status == undefined) {
      throw new Error("user not found");
    }

    //Set user_status to false witch means is inactive
    this.user.set({ user_status: !this.user.getAttributes().user_status });

    //Save user changes
    this.user.update(this.user.get("id")!, this.user.getAttributes());

    return this.user.getAttributes();
  }
}
