import IUserProps from "../interfaces/IUserProps";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";
import Model from "../entities/Model";

export default class UserProfileUseCase {
  private user: Model<IUserProps>;
  private entityFactory: IAbstractEntityFactory;

  constructor(entityFactory: IAbstractEntityFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
  }
  public async execute(id: string): Promise<IUserProps> {
    await this.user.fetch(parseInt(id));
    return this.user.getAttributes();
  }
}
