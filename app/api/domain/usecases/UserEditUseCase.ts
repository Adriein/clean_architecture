import IUserProps from "../interfaces/IUserProps";
import EntityFactory from "../../factories/DomainEntityFactory";
import Model from "../entities/Model";


export default class UserEditUseCase {
  private user: Model<IUserProps>;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
  }
  public async execute(id: string, body: any) {
      this.user.update(parseInt(id), body);
  }
}
