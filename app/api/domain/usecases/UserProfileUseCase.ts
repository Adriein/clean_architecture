import { IUserProps, IAbstractEntityFactory } from "../interfaces";
import { Model } from "../entities";
export default class UserProfileUseCase {
  private user: Model<IUserProps>;
  private entityFactory: IAbstractEntityFactory<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createEntity();
  }
  public async execute(id: string): Promise<IUserProps> {
    await this.user.fetch(parseInt(id));  
    return this.user.getAttributes();
  }
}
