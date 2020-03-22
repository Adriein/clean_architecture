import { IUserProps, IAbstractEntityFactory } from "../interfaces";
import { Collection } from "../entities";

export default class UsersOverviewUseCase {
  private userCollection: Collection<IUserProps>;
  private entityFactory: IAbstractEntityFactory<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.entityFactory = entityFactory;
    this.userCollection = this.entityFactory.createCollection();
  }
  public async execute(): Promise<IUserProps[]> {
    await this.userCollection.create();
    return this.userCollection.getCollection();
  }
}
