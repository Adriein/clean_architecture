import Database from "./Database";
import { ISync, IFoodProps } from "../../domain/interfaces";
import { TableUserToFood, TableFood, TableUser } from "./entity";

export default class FoodLocalSync implements ISync<IFoodProps> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(): Promise<IFoodProps[]> {
    return (await this.db.connection.getRepository(TableFood).find()) as IFoodProps[];
  }

  public async fetch(id: number): Promise<IFoodProps> {}

  public async create(model: IFoodProps): Promise<number> {}

  public async update(id: number, model: IFoodProps): Promise<number> {}

  public async delete(id: number): Promise<IFoodProps> {}
}
