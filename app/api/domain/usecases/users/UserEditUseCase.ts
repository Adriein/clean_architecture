import { IUserProps, IAbstractFactory } from "../../interfaces";
import { Model } from "../../entities";

export default class UserEditUseCase {
  private user!: Model<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(id: string, body: any): Promise<IUserProps> {
    this.user = this.entityFactory.createUser();

    //Retrive user stored on db
    await this.user.fetch(parseInt(id));
    const user = this.user.getAttributes();

    if (!user) {
      throw new Error("user not found");
    }

    //Delete the id in the body
    delete body.id;

    //Save user changes
    await this.user.update(parseInt(id), JSON.parse(JSON.stringify(body)));
    return this.user.getAttributes();
  }
}
