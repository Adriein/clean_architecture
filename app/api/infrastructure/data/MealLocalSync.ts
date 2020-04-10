import Database from "./Database";
import { ISync, IMealProps } from "../../domain/interfaces";
import { TableMeal } from "./entity";

export default class DietLocalSync implements ISync<IMealProps> {
  public async findAll(): Promise<IMealProps[]> {
    throw new Error();
  }

  public async fetch(id: number): Promise<IMealProps> {
    throw new Error();
  }

  public async create(model: IMealProps): Promise<IMealProps> {
    // return await Database.getInstance()
    //   .connection.getRepository(TableMeal)
    //   .save(model as TableMeal);
    // console.log(model, 'model of meal');

    return { ...model };
  }

  public async update(id: number, model: IMealProps): Promise<IMealProps> {
    throw new Error();
  }

  public async delete(id: number): Promise<IMealProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IMealProps[]> {
    throw new Error("not implemented yet");
  }
}
