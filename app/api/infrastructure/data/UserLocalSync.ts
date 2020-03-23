import Database from "./Database";
import { ISync, IUserProps, IFoodProps } from "../../domain/interfaces";
import { TableUserToFood, TableFood, TableUser } from "./entity";

export default class UserLocalSync implements ISync<IUserProps> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(): Promise<IUserProps[]> {
    try {
      return (await this.db.connection.getRepository(TableUser).find()) as IUserProps[];
    } catch (error) {
      throw new Error("fallo al leer");
    }
  }

  public async fetch(id: number): Promise<IUserProps> {
    return this.db.connection.getRepository(TableUser).findOne(id) as IUserProps;
  }

  public async create(model: IUserProps): Promise<IUserProps> {
    return await this.db.connection.getRepository(TableUser).save(model as TableUser);
  }

  public async update(id: number, model: IUserProps): Promise<IUserProps> {
    const userSchema = this.db.connection.getRepository(TableUser);
    const user = await userSchema.findOne(id);

    return await userSchema.save(Object.assign(user, model));
  }

  public async delete(id: number): Promise<IUserProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IUserProps[]> {
    throw new Error("not implemented yet");
  }
}
