import Database from "./Database";
import ISync from "../../domain/interfaces/ISync";
import TableUser from "./entity/TableUser";
import IUserProps from "../../domain/interfaces/IUserProps";
import TableUserToFood from "./entity/TableUserToFood";
import TableFood from "./entity/TableFood";
import IFoodProps from "../../domain/interfaces/IFoodProps";

export default class UserLocalSync implements ISync<IUserProps> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(): Promise<IUserProps[]> {
    try {
      return (await this.db.connection.getRepository(TableUser).find()) as IUserProps[];
    } catch (error) {
      throw new Error("fallo al leer");
    }
  }

  public async fetch(id: number): Promise<IUserProps> {
    try {
      //fetch the user
      const user = (await this.db.connection.getRepository(TableUser).findOne(id)) as IUserProps;

      if (user != undefined) {
        //get their related foods
        const asociatedFoods = await this.db.connection
          .getRepository(TableUserToFood)
          .find({ where: { userId: id } });

        //get food names
        const foodObject: IFoodProps[] = [];

        for (const relatedFood of asociatedFoods) {
          const food = await this.db.connection
            .getRepository(TableFood)
            .findOne(relatedFood.foodId);

          if (food != undefined) {
            foodObject.push({
              id: food.id,
              name: food.name!,
              like: relatedFood.like as boolean
            } as IFoodProps);
          } else {
            throw new Error("food not found");
          }
        }

        //set foodObject to the user
        user.foods = foodObject;

        return user;
      } else {
        throw new Error("user not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public async create(model: IUserProps): Promise<number> {
    try {
      //Parse the model
      const parsed = JSON.parse(JSON.stringify(model));

      //Parse the model foods object
      const parsedFoods = JSON.parse(`[${parsed.foods}]`);

      //Delete unnecesary model params
      delete parsed.foods;

      //Save model into db
      const savedUser = await this.db.connection.getRepository(TableUser).save(parsed);

      //Save related foods
      for (const foodObject of parsedFoods) {
        const foodModel = new TableUserToFood();
        foodModel.userId = savedUser.id;
        foodModel.foodId = foodObject.id;
        foodModel.like = foodObject.like == "true" ? true : false;
        await this.db.connection.getRepository(TableUserToFood).save(foodModel);
      }

      return savedUser.id;
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, model: IUserProps): Promise<number> {
    try {
      //Retrive schemas
      const userSchema = this.db.connection.getRepository(TableUser);
      const foodSchema = this.db.connection.getRepository(TableUserToFood);

      //Retrive user stored on db
      const user = await userSchema.findOne(id);

      if (!user) {
        throw new Error("user not found");
      }

      //Parse the model foods object
      const parsedFoods = JSON.parse(`[${model.foods}]`);

      //Save changes on user foods preferences
      for (const food of parsedFoods) {
        const relatedFoods: TableUserToFood[] = await foodSchema.find({
          where: { userId: user.id, foodId: food.id }
        });

        const foodModel = new TableUserToFood();
        foodModel.userId = user.id || 0;
        foodModel.foodId = food.id;
        foodModel.like = food.like == "true" ? true : false;

        //Check if the user has any foods asociated
        if (relatedFoods.length == 0) {
          await foodSchema.save(foodModel);
        } else {
          await foodSchema.save(Object.assign(relatedFoods[0], foodModel));
        }
      }

      //Delete unnecesary model params
      delete model.foods;

      //Save user changes
      const savedUser = await userSchema.save(Object.assign(user, model));
      if (savedUser && savedUser.id) {
        return savedUser.id;
      } else {
        throw new Error("filed to update user");
      }
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number): Promise<IUserProps> {
    //Retrive schema
    const userSchema = this.db.connection.getRepository(TableUser);

    //Retrive user stored on db
    let user = await userSchema.findOne(id);

    if (!user) {
      throw new Error("user not found");
    }

    //Set user_status to false witch means is inactive
    const status = !user.user_status;
    user.user_status = status;

    //Save user changes
    const savedUser = (await userSchema.save(user)) as any;

    if (savedUser) {
      return savedUser;
    }

    throw new Error("failed to delete user");
  }
}
