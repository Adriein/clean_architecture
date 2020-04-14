import Model from "./Model";
import Food from "./Food";
import { IMealProps, IAttributes, ISync, IAbstractFactory, IFoodProps } from "../interfaces";

export default class Meal extends Model<IMealProps> {
  private entityFactory: IAbstractFactory;
  private foods: IFoodProps[] = [];

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

  public async addFood(body: IMealProps): Promise<IFoodProps[]> {
    for(const food of body.foods!) {
      this.addKcal(food.kcal!);
      this.foods = [...this.foods, food]
    }
    
    
    return this.foods;
  }

  // public async removeFood(body: IFoodProps): Promise<Food[]> {
  //   const food = this.entityFactory.createFood();
  //   await food.delete(body.id!);
  //   this.substractKcal(body.kcal!);
  //   return (this.foods = this.foods.filter((food: Food) => food.get("id") != body.id));
  // }
}
