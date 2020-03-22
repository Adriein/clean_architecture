import IUserProps from "../interfaces/IUserProps";
import Model from "../entities/Model";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";

export default class UserDeleteUseCase {
  private user: Model<IUserProps>;
  private entityFactory: IAbstractEntityFactory<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createEntity();
  }
  public async execute(id: number): Promise<IUserProps> {
    await this.user.delete(id);
    return this.user.getAttributes();
  }
}