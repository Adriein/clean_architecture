import { ISync, IFoodUserRelation } from "../../domain/interfaces";
import Database from "./Database";
import { TableUserToFood } from "./entity";

export default class FoodUserLocalSync implements ISync<IFoodUserRelation> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }
  public async findAll(): Promise<IFoodUserRelation[]> {
    throw new Error("not implemented yet");
  }
  public async fetch(id: number): Promise<IFoodUserRelation> {
    throw new Error("not implemented yet");
  }

  public async create(model: IFoodUserRelation): Promise<IFoodUserRelation> {
    return await this.db.connection.getRepository(TableUserToFood).save(model as TableUserToFood);
  }

  public async update(id: number, model: IFoodUserRelation): Promise<IFoodUserRelation> {
    const foodSchema = this.db.connection.getRepository(TableUserToFood);
    const [relatedFoods] = await foodSchema.find({
      where: { id }
    });

    return await foodSchema.save(Object.assign(relatedFoods, model));
  }

  public async delete(id: number): Promise<IFoodUserRelation> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: any): Promise<IFoodUserRelation[]> {
    return (await this.db.connection
      .getRepository(TableUserToFood)
      .find(options)) as IFoodUserRelation[];
  }
}
