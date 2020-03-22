import IUserProps from "../interfaces/IUserProps";
import Model from "../entities/Model";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";

export default class UserEditUseCase {
  private user: Model<IUserProps>;
  private entityFactory: IAbstractEntityFactory<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createEntity();
  }
  public async execute(id: string, body: any): Promise<IUserProps> {
    await this.user.update(parseInt(id), body);
    return this.user.getAttributes();
  }
}
