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
      const meal = this.entityFactory.createMeal({ dietId: id });
      await meal.create(meal.getAttributes());
      this.meals = [...this.meals, meal.getAttributes()];
      created++;
    }
  }

  async incrementMeals(): Promise<void> {
    const { id } = this.getAttributes();
    const meal = this.entityFactory.createMeal({ dietId: id });
    await meal.create(meal.getAttributes());
    this.meals = [...this.meals, meal.getAttributes()];
  }

  get allMeals(): IMealProps[] {
    return this.meals;
  }
}
