import { IUserProps, IFoodProps } from ".";

export default interface IFoodUserRelation {
  id?: number;
  userId?: number;
  foodId?: number;
  like?: boolean;
  user?: IUserProps;
  food?: IFoodProps;
}
