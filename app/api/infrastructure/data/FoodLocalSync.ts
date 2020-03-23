import Database from "./Database";
import { ISync, IFoodProps } from "../../domain/interfaces";
import { TableUserToFood, TableFood, TableUser } from "./entity";

export default class FoodLocalSync implements ISync<IFoodProps> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(id?: number): Promise<IFoodProps[]> {
    const likedFoods: IFoodProps[] = [];
    //Check if we want only list with liked foods
    if (id) {
      //Get food relation by user
      const foodRelation = await this.db.connection
        .getRepository(TableUserToFood)
        .find({ userId: id });

      //Get only the liked foods by this user
      const likedFoodsIds = foodRelation.map((relation: TableUserToFood) => {
        if (relation.like) {
          return relation.foodId;
        }
      });

      for (const id of likedFoodsIds) {
        likedFoods.push(
          (await this.db.connection.getRepository(TableFood).findOne(id)) as IFoodProps
        );
      }
      return (await this.db.connection.getRepository(TableFood).find()) as IFoodProps[];
    }
    return (await this.db.connection.getRepository(TableFood).find()) as IFoodProps[];
  }

  public async fetch(id: number): Promise<IFoodProps> {
    return (await this.db.connection.getRepository(TableFood).findOne(id)) as IFoodProps;
  }

  public async create(model: IFoodProps): Promise<IFoodProps> {
    throw new Error("not implemented yet");
  }

  public async update(id: number, model: IFoodProps): Promise<IFoodProps> {
    throw new Error("not implemented yet");
  }

  public async delete(id: number): Promise<IFoodProps> {
    throw new Error("not implemented yet");
  }

  public async findBy(options?: Object): Promise<IFoodProps[]> {
    throw new Error("not implemented yet");
  }
}
