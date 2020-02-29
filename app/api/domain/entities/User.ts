import Model from "./Model";
import IUserProps from "../interfaces/IUserProps";
import IAttributes from "../interfaces/IAttributes";
import ISync from "../interfaces/ISync";
import { Tablenames } from "../Enums";

export default class User extends Model<IUserProps> {
  constructor(
    modelAttributes: IAttributes<IUserProps>,
    sync: ISync<IUserProps>
  ) {
    super(modelAttributes, sync);
  }

  public async fetch(id: number): Promise<void> {
    await super.fetch(id, 'user');
  }
}
