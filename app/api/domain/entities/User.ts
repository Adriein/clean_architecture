import Model from "./Model";
import { IUserProps, IAttributes, ISync } from "../interfaces";

export default class User extends Model<IUserProps> {
  constructor(modelAttributes: IAttributes<IUserProps>, sync: ISync<IUserProps>) {
    super(modelAttributes, sync);
  }

  public async fetch(id: number): Promise<void> {
    await super.fetch(id);
  }

  public async update(id: number, data: IUserProps): Promise<void> {
    await super.update(id, data);
  }
}
