import Food from "../entities/Food";
import EntityFactory from "../factories/DomainEntityFactory";
import IUserFoodRelation from "../interfaces/IUserFoodRelation";

export default class GetUserTasterUseCase {
  private food: Food;
  private entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this.entityFactory = entityFactory;
    this.food = this.entityFactory.createFood();
  }
  public async execute(id: string): Promise<IUserFoodRelation[]> {
      return await this.food.getUserFoodRelation(id);
  }
}
