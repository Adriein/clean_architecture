import Collection from "./Collection";
import IUserProps from "../interfaces/IUserProps";
import ISync from "../interfaces/ISync";
import { Tablenames } from "../Enums";

export default class UserCollection extends Collection<IUserProps> {
  constructor(sync: ISync<IUserProps>) {
    super([], sync);
  }

  public async create(): Promise<void> {
    return await super.create();
  }
}
