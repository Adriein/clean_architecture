import Database from "./Database";
import ISync from "../../domain/interfaces/ISync";
import Users from "./entity/DTOUser";
import Food from "./entity/DTOFood";

export default class LocalSync<T> implements ISync<T> {
  public db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  public async findAll(type: string): Promise<T[]> {
    try {
      switch (type) {
        case "usercollection":
          return (await this.db.connection.getRepository(Users).find()) as T[];
        case "user":
          return (await this.db.connection.getRepository(Users).find()) as T[];
        case "food":
          return (await this.db.connection.getRepository(Food).find()) as T[];
        default:
          throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }

  public async fetch(id: number, type: string): Promise<T> {
    try {
      switch (type) {
        case "user":
          return (await this.db.connection
            .getRepository(Users)
            .findOne(id)) as T;
        case "food":
          return (await this.db.connection
            .getRepository(Food)
            .findOne(id)) as T;
        default:
          throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, model: T): Promise<void> {
    try {
      switch (type) {
        case "user":
          return this.db.connection.getRepository(Users).save(model)
        case "food":
          
        default:
          throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }

  // public async findAll(searchParams: ISearchParams): Promise<T[]> {
  //   try {
  //     const { table } = searchParams;
  //     const result: T[] = await this.db.query(`SELECT * FROM ${table}`);

  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // public async updateUser(id: number, model: IUserProps): Promise<void> {
  //   try {
  //     await this.db.query(`UPDATE user_profile SET `);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

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

  // public async findOne(searchParams: SearchParameters): Promise<T> {
  //   try {
  //     const tableName: string = searchParams.table;
  //     delete searchParams[tableName];
  //     const fieldName = Object.keys(searchParams)[1];

  //     const [props] = await this.db.query(
  //       `SELECT * FROM ${tableName} WHERE ${fieldName}='${searchParams[fieldName]}'`
  //     );

  //     if (!props) {
  //       throw new Error(`Register not found in ${tableName}`);
  //     }

  //     return props;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // public async find(searchParams: ISearchParams): Promise<any[]> {
  //   const { table, raw, where, join } = searchParams;
  //   const whereStatement: string[] = [];
  //   try {
  //     if (raw) {
  //       return await this.db.query(raw);
  //     }

  //     for (const key in where) {
  //       whereStatement.push(`${key}='${where[key]}'`);
  //     }

  //     const props = await this.db.query(
  //       `SELECT * FROM ${table} WHERE ${whereStatement.join(`${join} `)}`
  //     );

  //     if (!props) {
  //       throw new Error(`Register not found in ${table}`);
  //     }

  //     return props;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // public abstract getAllEntities<T>(): T[];

  // public abstract updateEntity<T>(entity: T): T;

  // public abstract async save(props: T): Promise<number>;

  // public abstract deleteEntity<T>(id: number): T;

  // public abstract async findAll(): Promise<T[]>;
}
