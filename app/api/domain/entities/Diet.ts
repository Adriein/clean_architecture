import Model from "./Model";
import IDietProps from "../interfaces/IDietProps";
import { IAttributes, ISync, IFoodProps } from "../interfaces";

export default class Diet extends Model<IDietProps> {
  private food: Model<IFoodProps>;

  constructor(modelAttributes: IAttributes<IDietProps>, sync: ISync<IDietProps>) {
    super(modelAttributes, sync);
  }
}
