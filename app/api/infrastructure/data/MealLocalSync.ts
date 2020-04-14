import Database from "./Database";
import { ISync, IMealProps } from "../../domain/interfaces";
import { TableMeal } from "./entity";
import { getRepository } from "typeorm";

export default class DietLocalSync implements ISync<IMealProps> {
  public async findAll(): Promise<IMealProps[]> {
    throw new Error();
  }

  public async fetch(id: number): Promise<IMealProps> {
    throw new Error();
  }

  public async create(model: any): Promise<IMealProps> {
    const connection = Database.getInstance().connection.getRepository(TableMeal);
    const mealSchema = new TableMeal();
    mealSchema.foods = model.foods
    console.log(model);
    
    return await connection.save(model);
  }

  public async update(id: number, model: IMealProps): Promise<IMealProps> {
    throw new Error();
  }

  public async delete(id: number): Promise<IMealProps> {
    const connection = Database.getInstance().connection.getRepository(TableMeal);
    const mealSchema = new TableMeal();
    mealSchema.foods = [];
    const mealInDB = await connection.findOne(id);
    await connection.save(Object.assign(mealInDB, mealSchema));
    await connection.delete(id);
    return { id };
  }

  public async findBy(options?: Object): Promise<IMealProps[]> {
    console.log(options);
    
    return (await Database.getInstance()
      .connection.getRepository(TableMeal)
      .find({relations: ["diet"]})) as IMealProps[];
  }
}
