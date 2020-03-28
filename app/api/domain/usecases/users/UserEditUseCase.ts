import { IUserProps, IAbstractFactory, IFoodUserRelation } from "../../interfaces";
import { Model } from "../../entities";

export default class UserEditUseCase {
  private user!: Model<IUserProps>;
  private entityFactory: IAbstractFactory;
  private foodUserRelation!: Model<IFoodUserRelation>;

  constructor(entityFactory: IAbstractFactory) {
    this.entityFactory = entityFactory;
  }
  public async execute(id: string, body: any): Promise<IUserProps> {
    this.user = this.entityFactory.createUser();
    this.foodUserRelation = this.entityFactory.createFoodUserRelation();
    //Retrive user stored on db
    await this.user.fetch(parseInt(id));
    const user = this.user.getAttributes();

    if (!user) {
      throw new Error("user not found");
    }

    //Parse the model foods object
    const parsedFoods = JSON.parse(`[${body.foods}]`);

    //Save changes on user foods preferences
    for (const food of parsedFoods) {
      const [relatedFoods]: IFoodUserRelation[] = await this.foodUserRelation.findBy({
        where: { userId: user.id, foodId: food.id }
      });
      const foodModel = {
        userId: user.id,
        foodId: food.id,
        like: food.like == "true" ? true : false
      };

      //Check if the user has any foods asociated
      if (!relatedFoods) {
        await this.foodUserRelation.create(foodModel);
      } else {
        await this.foodUserRelation.update(relatedFoods.id!, foodModel);
      }
    }

    //Delete unnecesary model params
    delete body.foods;

    //Save user changes
    await this.user.update(parseInt(id), JSON.parse(JSON.stringify(body)));
    return this.user.getAttributes();
  }
}
