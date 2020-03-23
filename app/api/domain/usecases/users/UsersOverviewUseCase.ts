import { IUserProps, IAbstractFactory } from "../../interfaces";
import { Collection } from "../../entities";

export default class UsersOverviewUseCase {
  private userCollection: Collection<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
    this.userCollection = this.entityFactory.createUserCollection();
  }
  public async execute(): Promise<IUserProps[]> {
    await this.userCollection.create();
    return this.userCollection.getCollection();
  }
}
