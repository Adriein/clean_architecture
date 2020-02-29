import IUserFoodRelation from "../interfaces/IUserFoodRelation";
import Model from "./Model";
import IAttributes from "../interfaces/IAttributes";
import IFoodSync from "../interfaces/IFoodSync";

export default class Food extends Model<IUserFoodRelation>{
    constructor(modelAttributes: IAttributes<IUserFoodRelation>, sync: IFoodSync) {
        super(modelAttributes, sync);
    }

    public async getUserFoodRelation(id: string): Promise<IUserFoodRelation[]> {
        const sync = this.getSync() as IFoodSync;

        return await sync.getTastesByUser(id)
    }
}