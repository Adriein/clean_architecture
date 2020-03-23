import { IUserProps, IAbstractFactory, IFoodUserRelation, IFoodProps } from "../../interfaces";
import { Model } from "../../entities";

export default class UserCreateUseCase {
  private user: Model<IUserProps>;
  private foodUserRelation: Model<IFoodUserRelation>;
  private entityFactory: IAbstractFactory;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
    this.user = this.entityFactory.createUser();
    this.foodUserRelation = this.entityFactory.createFoodUserRelation();
  }
  public async execute(body: any): Promise<IUserProps> {
    //Parse the model
    const parsed = JSON.parse(JSON.stringify(body));

    //Parse the model foods object
    const parsedFoods: IFoodProps[] = JSON.parse(`[${parsed.foods}]`);

    //Delete unnecesary model params
    delete parsed.foods;

    //Save model into db
    await this.user.create(body);

    //Save related foods
    for (const food of parsedFoods) {
      const foodRelationModel = {
        userId: this.user.get("id"),
        foodId: food.id,
        like: food.liked
      } as IFoodUserRelation;

      await this.foodUserRelation.create(foodRelationModel);
    }

    return this.user.getAttributes();
  }
}
