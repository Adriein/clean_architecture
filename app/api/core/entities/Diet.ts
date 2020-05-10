import Model from "./Model";
import IDietProps from "../interfaces/IDietProps";
import { IAttributes, ISync, IAbstractFactory, IMealProps } from "../interfaces";
import Meal from "./Meal";

export default class Diet extends Model<IDietProps> {
  private meals: IMealProps[] = [];
  private entityFactory: IAbstractFactory;

  constructor(
    modelAttributes: IAttributes<IDietProps>,
    sync: ISync<IDietProps>,
    entityFactory: IAbstractFactory
  ) {
    super(modelAttributes, sync);
    this.entityFactory = entityFactory;
  }

  public async generateMeals(): Promise<void> {
    let created: number = 0;
    const { id, numOfMeals } = this.getAttributes();

    while (created < numOfMeals!) {
      const meal: Meal = this.entityFactory.createMeal({
        diet: id,
        name: `meal nº${created + 1}`,
      });
      await meal.create(meal.getAttributes());
      this.meals = [...this.meals, meal.getAttributes()];
      created++;
    }
  }

  public async incrementMeals(body: IMealProps): Promise<void> {
    const { id } = this.getAttributes();
   
    const meal: Meal = this.entityFactory.createMeal({
      diet: id,
      name: `meal nº${this.meals.length + 1}`,
    });

    await meal.create(meal.getAttributes());
    this.meals = [...this.meals, meal.getAttributes()];
  }

  public async decrementMeals(mealId: number): Promise<void> {
    const { id } = this.getAttributes();
    const meal: Meal = this.entityFactory.createMeal({
      diet: id,
    });
    await meal.delete(mealId);
    this.meals = this.meals.filter((element) => element.id != meal.get("id"));
  }

  get allMeals(): IMealProps[] {
    return this.meals;
  }
}
