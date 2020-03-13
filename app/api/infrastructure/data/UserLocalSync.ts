import Database from "./Database";
import ISync from "../../domain/interfaces/ISync";
import Users from "./entity/DTOUser";

export default class UserLocalSync<T> implements ISync<T> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(): Promise<T[]> {
    try {
      return (await this.db.connection.getRepository(Users).find()) as T[];
    } catch (error) {
      throw error;
    }
  }

  public async fetch(id: number): Promise<T> {
    try {
      return (await this.db.connection.getRepository(Users).findOne(id)) as T;
    } catch (error) {
      throw error;
    }
  }

  public async create(model: T): Promise<void> {
    try {
      
      const parsed = JSON.parse(JSON.stringify(model));
      await this.db.connection.getRepository(Users).save(parsed);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, model: T): Promise<void> {
    try {
      const user = this.db.connection.getRepository(Users);
      let foundondb = await user.findOne(id);
      foundondb = Object.assign(foundondb, model)
      await user.save(foundondb!);
      
    } catch (error) {
      console.log(error);
      
      throw error;
    }
  }

  // public async getTastesByUser(id: string): Promise<IUserFoodRelation[]> {
  //   try {
  //     const result: IUserFoodRelation[] = await this.db.query(
  //       `SELECT user_foods.id, user_foods.liked, foods.name FROM user_foods INNER JOIN foods ON user_foods.food_id = foods.id where user_foods.user_id = '${id}'`
  //     );

  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
