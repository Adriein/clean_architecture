import Database from "./Database";
import { ISync, IFoodProps } from "../../core/interfaces";
import { TableFood } from "./entity";

export default class FoodLocalSync implements ISync<IFoodProps> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(id?: number): Promise<IFoodProps[]> {
    return (await this.db.connection.getRepository(TableFood).find()) as IFoodProps[];
  }

  public async fetch(id: number): Promise<IFoodProps> {
    return (await this.db.connection.getRepository(TableFood).findOne(id)) as IFoodProps;
  }

  public async create(model: IFoodProps): Promise<IFoodProps> {
    return await this.db.connection.getRepository(TableFood).save(model as TableFood);
  }

  public async update(id: number, model: IFoodProps): Promise<IFoodProps> {
    const foodSchema = this.db.connection.getRepository(TableFood);
    const food = await foodSchema.findOne(id);

    return await foodSchema.save(Object.assign(food, model));
  }

  public async delete(id: number): Promise<IFoodProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IFoodProps[]> {
    throw new Error("not implemented yet");
  }
}
