import { Macros } from "../entities";
import { IMealProps } from ".";


export default interface IDietProps {
  id?: number,
  user?: number
  createDate?: Date;
  updateDate?: Date;
  validTo?: Date;
  numOfMeals?: number;
  totalKcal?: number;
  macros?: Macros;
  meals?: IMealProps[];
}
