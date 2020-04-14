import Database from "./Database";
import { ISync, IDietProps } from "../../domain/interfaces";
import { DietSchema, TableUser, TableMeal } from "./entity";
import IMapper from "../../domain/interfaces/IMapper";

export default class DietLocalSync implements ISync<IDietProps> {
  constructor(private mapper: IMapper<IDietProps, DietSchema>) {}

  public async findAll(): Promise<IDietProps[]> {
    throw new Error();
  }

  public async fetch(id: number): Promise<IDietProps> {
    return (await Database.getInstance()
      .connection.getRepository(DietSchema)
      .findOne(id)) as IDietProps;
  }

  public async create(model: any): Promise<IDietProps> {
    const schema = this.mapper.mapToDatabase(model, () => new DietSchema());
    return await Database.getInstance()
      .connection.getRepository(DietSchema)
      .save(schema as any);
  }

  public async update(id: number, model: IDietProps): Promise<IDietProps> {
    throw new Error();
  }

  public async delete(id: number): Promise<IDietProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IDietProps[]> {
    return (await Database.getInstance()
      .connection.getRepository(DietSchema)
      .find(options)) as IDietProps[];
  }
}
