import { IUserProps, IAbstractEntityFactory, IFoodProps } from "../interfaces";
import { Model } from "../entities";

export default class FoodListUseCase {
  private food: Model<IFoodProps>;
  private entityFactory: IAbstractEntityFactory<IUserProps>;

  constructor(entityFactory: IAbstractEntityFactory<IUserProps>) {
    this.entityFactory = entityFactory;
    this.food = this.entityFactory.createEntity();
  }
  public async execute(id?: number): Promise<IUserProps> {
    await this.user.create(body);
    return this.user.getAttributes();
  }
}
