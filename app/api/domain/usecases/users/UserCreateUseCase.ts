import { IUserProps, IAbstractFactory, IFoodUserRelation, IFoodProps } from "../../interfaces";
import { Model } from "../../entities";
import * as faker from "faker";

export default class UserCreateUseCase {
  private user!: Model<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(body: any): Promise<IUserProps> {
    this.user = this.entityFactory.createUser();

    //Parse the model
    const parsed = JSON.parse(JSON.stringify(body));

    //Provisional: create avatar
    parsed.avatar = faker.internet.avatar();

    //Save model into db
    await this.user.create(parsed);

    return this.user.getAttributes();
  }
}
