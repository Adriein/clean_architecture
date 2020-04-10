import Model from "./Model";
import Food from "./Food";
import { IMealProps, IAttributes, ISync, IAbstractFactory, IFoodProps } from "../interfaces";

export default class Meal extends Model<IMealProps> {
  private entityFactory: IAbstractFactory;
  private foods: Food[] = [];

  constructor(
    modelAttributes: IAttributes<IMealProps>,
    sync: ISync<IMealProps>,
    entityFactory: IAbstractFactory
  ) {
    super(modelAttributes, sync);
    this.entityFactory = entityFactory;
  }

  private addKcal(kcal: number): void {
    const actualKcal = this.get("totalKcal") || 0;
    this.set({ totalKcal: actualKcal + kcal });
  }

  private substractKcal(kcal: number): void {
    const actualKcal = this.get("totalKcal") || 0;
    this.set({ totalKcal: actualKcal - kcal });
  }

  public async addFood(body: IFoodProps): Promise<Food[]> {
    const food = this.entityFactory.createFood();
    await food.create(body);
    this.addKcal(body.kcal!);
    return (this.foods = [...this.foods, food]);
  }

  public async removeFood(body: IFoodProps): Promise<Food[]> {
    const food = this.entityFactory.createFood();
    await food.delete(body.id!);
    this.substractKcal(body.kcal!);
    return (this.foods = this.foods.filter((food: Food) => food.get("id") != body.id));
  }
}
