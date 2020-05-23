import Model from './generic/Model';
import { IUserProps, IAttributes, ISync } from '../interfaces';

export default class User extends Model<IUserProps> {
  constructor(modelAttributes: IAttributes<IUserProps>, sync: ISync<IUserProps>) {
    super(modelAttributes, sync);
  }
}
