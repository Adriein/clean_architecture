import IUserProps from "../interfaces/IUserProps";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";
import Collection from "../entities/Collection";


export default class UsersOverviewUseCase {
  private userCollection: Collection<IUserProps>;
  private entityFactory: IAbstractEntityFactory;

  constructor(entityFactory: IAbstractEntityFactory) {
    this.entityFactory = entityFactory;
    this.userCollection = this.entityFactory.createUsersCollection();
  }
  public async execute(): Promise<IUserProps[]> {
    await this.userCollection.create();
    return this.userCollection.getCollection();
  }
}
