import User from "../entities/User";
import IUserProps from "../interfaces/IUserProps";
import EntityFactory from "../factories/DomainEntityFactory";

export default class UserProfileUseCase {
  private user: User;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
  }
  public async execute(id: string): Promise<IUserProps> {
    await this.user.fetch(parseInt(id));
    return this.user.getAttributes();
  }
}
