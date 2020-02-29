export default interface IUserProps {
  id?: number;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  sex?: string;
  age?: string;
  level?: string;
  weight?: string;
  height?: string;
  nutrition_objective?: string;
  notes?: string;
  injuries?: string;
  likedFoods?: Object;
  dislikedFoods?: string[]
  user_status?: number;
  rol?: number;
}
