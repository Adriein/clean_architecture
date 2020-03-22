import Model from "./Model";
import IAttributes from "../interfaces/IAttributes";
import ISync from "../interfaces/ISync";
import IFoodProps from "../interfaces/IFoodProps";

export default class Food extends Model<IFoodProps> {
  constructor(
    modelAttributes: IAttributes<IFoodProps>,
    sync: ISync<IFoodProps>
  ) {
    super(modelAttributes, sync);
  }
}
