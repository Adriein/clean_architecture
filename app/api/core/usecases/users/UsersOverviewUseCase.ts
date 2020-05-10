import { IUserProps, IAbstractFactory } from "../../interfaces";
import { Collection } from "../../entities";

export default class UsersOverviewUseCase {
  private userCollection!: Collection<IUserProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(): Promise<IUserProps[]> {
    this.userCollection = this.entityFactory.createUserCollection();
    await this.userCollection.create();
    return this.userCollection.getCollection();
  }
}
