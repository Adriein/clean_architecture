import { IFoodProps } from ".";
import { Model } from "../entities";

export default interface IMealProps {
  id?: number;
  name?: string;
  totalKcal?: number;
  diet?: number;
  foods?: IFoodProps[];
}