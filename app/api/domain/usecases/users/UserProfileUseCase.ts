import { IUserProps, IAbstractFactory, IFoodUserRelation, IFoodProps } from "../../interfaces";
import { Model } from "../../entities";
export default class UserProfileUseCase {
  private user: Model<IUserProps>;
  private foodUserRelation: Model<IFoodUserRelation>;
  private food: Model<IFoodProps>;

  constructor(entityFactory: IAbstractFactory) {
    this.user = entityFactory.createUser();
    this.food = entityFactory.createFood();
    this.foodUserRelation = entityFactory.createFoodUserRelation();
  }
  public async execute(id: string): Promise<IUserProps> {
    //fetch the user
    await this.user.fetch(parseInt(id));
    const user = this.user.getAttributes();

    if (user != undefined) {
      //get their related foods
      const asociatedFoods = await this.foodUserRelation.findBy({ where: { userId: id } });

      //get food names
      const foodObject: IFoodProps[] = [];

      for (const relatedFood of asociatedFoods) {
        await this.food.fetch(relatedFood.foodId || 1);
        const food = this.food.getAttributes();

        if (food != undefined) {
          foodObject.push({
            id: food.id,
            name: food.name!,
            like: relatedFood.like as boolean
          } as IFoodProps);
        } else {
          throw new Error("food not found");
        }
      }

      //set foodObject to the user
      user.foods = foodObject;

      return user;
    } else {
      throw new Error("user not found");
    }
  }
}
