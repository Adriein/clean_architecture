import Model from "./Model";
import { IAttributes, ISync, IFoodProps } from "../interfaces";

export default class Food extends Model<IFoodProps> {
  constructor(modelAttributes: IAttributes<IFoodProps>, sync: ISync<IFoodProps>) {
    super(modelAttributes, sync);
  }
}
