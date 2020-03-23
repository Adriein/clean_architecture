import IFoodProps from "./IFoodProps";

export default interface IUserProps {
  id?: number;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  sex?: string;
  age?: number;
  level?: number;
  weight?: number;
  height?: number;
  nutrition_objective?: string;
  notes?: string;
  injuries?: string;
  foods?: IFoodProps[]
  user_status?: boolean;
  rol?: string;
}
