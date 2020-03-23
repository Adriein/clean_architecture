import { IAbstractFactory, IFoodProps } from "../../interfaces";
import { Collection } from "../../entities";

export default class FoodListUseCase {
  private food: Collection<IFoodProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
    this.food = this.entityFactory.createFoodCollection();
  }
  public async execute(id?: number): Promise<IFoodProps[]> {
    await this.food.create();
    return this.food.getCollection();
  }
}
