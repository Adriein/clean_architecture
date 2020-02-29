import IUserFoodRelation from "./IUserFoodRelation";
import ISync from "./ISync";

export default interface IFoodSync extends ISync<IUserFoodRelation> {
  getTastesByUser(id: string): Promise<IUserFoodRelation[]>;
}
