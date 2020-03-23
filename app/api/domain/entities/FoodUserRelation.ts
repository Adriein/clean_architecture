import Model from "./Model";
import { IAttributes, ISync, IFoodUserRelation } from "../interfaces";

export default class FoodUserRelation extends Model<IFoodUserRelation> {
  constructor(modelAttributes: IAttributes<IFoodUserRelation>, sync: ISync<IFoodUserRelation>) {
    super(modelAttributes, sync);
  }
}
