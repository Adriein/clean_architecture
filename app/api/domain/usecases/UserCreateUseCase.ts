import IUserProps from "../interfaces/IUserProps";
import EntityFactory from "../../factories/DomainEntityFactory";
import Model from "../entities/Model";
import User from "../entities/User";


export default class UserCreateUseCase {
  private user: Model<IUserProps>;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
  }
  public async execute(body: any) {
      this.user.create(body);
  }
}