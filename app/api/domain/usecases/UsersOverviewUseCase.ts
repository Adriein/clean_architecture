import UserCollection from "../entities/UserCollection";
import IUserProps from "../interfaces/IUserProps";
import EntityFactory from "../factories/DomainEntityFactory";

export default class UsersOverviewUseCase {
  private userCollection: UserCollection;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.userCollection = this.entityFactory.createUsersCollection();
  }
  public async execute(): Promise<IUserProps[]> {
    await this.userCollection.create();
    return this.userCollection.getCollection();
  }
}
