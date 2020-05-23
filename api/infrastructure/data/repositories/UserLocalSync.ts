import Database from '../Database';
import { ISync, IUserProps } from '../../../core/interfaces';
import { UserSchema } from '../schemas';
import {
  userSchemaToUserModel,
  userModelToUserSchema,
  createEventToUserSchema,
} from '../mappers/UserMapper';

export default class UserLocalSync implements ISync<IUserProps> {
  constructor(private db: Database) {
    this.db = db;
  }
  public async find(params?: any): Promise<IUserProps[]> {
    const connection = await this.db.connect();
    const response = await connection.getRepository(UserSchema).find();
    return response.map((user) => userSchemaToUserModel(user));
  }

  public async fetch(id: number): Promise<IUserProps> {
    const connection = await this.db.connect();
    const response = await connection.getRepository(UserSchema).findOne(id);
    if (!response) {
      throw new Error(`not user found with id: ${id}`);
    }
    return userSchemaToUserModel(response);
  }

  public async create(model: IUserProps): Promise<IUserProps> {
    const connection = await this.db.connect();
    const schema = createEventToUserSchema(model);
    const response = await connection.getRepository(UserSchema).save(schema);
    return userSchemaToUserModel(response);
  }

  public async update(id: number, model: IUserProps): Promise<IUserProps> {
    const connection = await this.db.connect();
    const userSchema = connection.getRepository(UserSchema);
    const user = await userSchema.findOne(id);

    const response = await userSchema.save(
      Object.assign(user, userModelToUserSchema(model))
    );
    return userSchemaToUserModel(response);
  }

  public async delete(id: number): Promise<number> {
    const connection = await this.db.connect();
    const userSchema = await connection.getRepository(UserSchema);
    const response = userSchema.findOne(id);
    if (!response) {
      throw new Error(`not user found with id: ${id}`);
    }
    return (await userSchema.delete(id)).affected!;
  }
}
