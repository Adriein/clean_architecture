import { Macros } from "../entities";


export default interface IDietProps {
  id?: number,
  user?: number
  createDate?: Date;
  updateDate?: Date;
  validTo?: Date;
  numOfMeals?: number;
  totalKcal?: number;
  macros?: Macros;
}
