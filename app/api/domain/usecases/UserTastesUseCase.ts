import IUserFoodRelation from "../interfaces/IUserFoodRelation";
import IAbstractEntityFactory from "../interfaces/IAbstractEntityFactory";
import Model from "../entities/Model";

export default class GetUserTasterUseCase {
  // private food: Model<IUserFoodRelation>;
  private entityFactory: IAbstractEntityFactory;

  constructor(entityFactory: IAbstractEntityFactory) {
    this.entityFactory = entityFactory;
    // this.food = this.entityFactory.createFood();
  }
  public async execute(id: string): Promise<IUserFoodRelation[]> {
      // return await this.food.getUserFoodRelation(id);
      throw new Error();
  }
}
