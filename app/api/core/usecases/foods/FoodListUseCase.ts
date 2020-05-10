import { IAbstractFactory, IFoodProps } from "../../interfaces";
import { Collection } from "../../entities";

export default class FoodListUseCase {
  private food!: Collection<IFoodProps>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(): Promise<IFoodProps[]> {
    this.food = this.entityFactory.createFoodCollection();
    await this.food.create();
    return this.food.getCollection();
  }
}
