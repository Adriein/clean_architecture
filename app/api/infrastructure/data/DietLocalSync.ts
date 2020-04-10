import Database from "./Database";
import { ISync, IDietProps } from "../../domain/interfaces";
import { TableDiet } from "./entity";

export default class DietLocalSync implements ISync<IDietProps> {
  public async findAll(): Promise<IDietProps[]> {
    throw new Error();
  }

  public async fetch(id: number): Promise<IDietProps> {
    throw new Error();
  }

  public async create(model: IDietProps): Promise<IDietProps> {
    return await Database.getInstance().connection.getRepository(TableDiet).save(model as TableDiet);
  }

  public async update(id: number, model: IDietProps): Promise<IDietProps> {
    throw new Error();
  }

  public async delete(id: number): Promise<IDietProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IDietProps[]> {
    throw new Error("not implemented yet");
  }
}
