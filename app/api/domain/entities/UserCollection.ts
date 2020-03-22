import Collection from "./Collection";
import { IUserProps, ISync } from "../interfaces";

export default class UserCollection extends Collection<IUserProps> {
  constructor(sync: ISync<IUserProps>) {
    super([], sync);
  }

  public async create(): Promise<void> {
    return await super.create();
  }
}
