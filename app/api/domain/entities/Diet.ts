import Model from "./Model";
import IDietProps from "../interfaces/IDietProps";
import { IAttributes, ISync } from "../interfaces";

export default class Diet extends Model<IDietProps> {
  constructor(modelAttributes: IAttributes<IDietProps>, sync: ISync<IDietProps>) {
    super(modelAttributes, sync);
  }
}
