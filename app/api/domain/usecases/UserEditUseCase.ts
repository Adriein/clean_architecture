import User from "../entities/User";
import IUserProps from "../interfaces/IUserProps";
import EntityFactory from "../factories/DomainEntityFactory";

export default class UserEditUseCase {
  private user: User;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
  }
  public async execute(id: string, body: any) {
      
  }
}
