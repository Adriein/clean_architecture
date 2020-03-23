import Collection from "./Collection";
import { IFoodProps, ISync } from "../interfaces";

export default class FoodCollection extends Collection<IFoodProps> {
  constructor(sync: ISync<IFoodProps>) {
    super([], sync);
  }
}
