// import { IMapper } from "../../../core/interfaces";

import { UserSchema } from '../schemas';
import { IUserProps } from '../../../core/interfaces';

export enum STATUS {
  active = 'active',
  inactive = 'inactive',
  pause = 'pause',
}

export enum ROL {
  admin = 'admin',
  user = 'user',
}

export enum PAYMENT {
  mensual = 'mensual',
  trimestral = 'trimestral',
  anual = 'anual',
}

// export default abstract class Mapper<T extends Object, K extends Object> implements IMapper<T, K> {
//   mapToDatabase(props: T, fn: Function): K {
//     for (const prop in props) {
//       if (props[prop] instanceof Array) {
//         const array: any = props[prop];
//         props[prop] = array.map((element: any) => JSON.parse(element));
//       }
//     }
//     return Object.assign(fn(), props);
//   }
//   mapToDomain(props: any): T {
//     return props as T;
//   }
// }
const intToBoolean = (num: number): boolean => (num === 0 ? false : true);
const booleanToInt = (bool: boolean): number => (bool === false ? 0 : 1);

const userSchemaToUserModel = (userSchema: UserSchema): IUserProps => {
  return {
    id: userSchema.id,
    avatar: userSchema.avatar,
    email: userSchema.email,
    password: userSchema.password,
    firstName: userSchema.firstName,
    lastName: userSchema.lastName,
    gender: userSchema.gender,
    age: userSchema.age,
    level: userSchema.level,
    weight: userSchema.weight,
    height: userSchema.height,
    objective: userSchema.objective,
    notes: userSchema.notes,
    injuries: userSchema.injuries,
    status: userSchema.status as STATUS,
    rol: userSchema.rol as ROL,
    pending: intToBoolean(userSchema.pending!),
    paymentType: userSchema.paymentType as PAYMENT,
  };
};

const userModelToUserSchema = (userModel: IUserProps): UserSchema => {
  return {
    id: userModel.id,
    avatar: userModel.avatar,
    email: userModel.email,
    password: userModel.password,
    firstName: userModel.firstName,
    lastName: userModel.lastName,
    gender: userModel.gender,
    age: userModel.age,
    level: userModel.level,
    weight: userModel.weight,
    height: userModel.height,
    objective: userModel.objective,
    notes: userModel.notes,
    injuries: userModel.injuries,
    status: userModel.status as string,
    rol: userModel.rol as ROL,
    pending: booleanToInt(userModel.pending!),
    paymentType: userModel.paymentType as string,
  };
};

const createEventToUserSchema = (userModel: IUserProps): UserSchema => {
  return {
    avatar: userModel.avatar,
    email: userModel.email,
    password: userModel.password,
    firstName: userModel.firstName,
    lastName: userModel.lastName,
    gender: userModel.gender,
    age: userModel.age,
    level: userModel.level,
    weight: userModel.weight,
    height: userModel.height,
    objective: userModel.objective,
    notes: userModel.notes,
    injuries: userModel.injuries,
    status: userModel.status as string,
    rol: userModel.rol as ROL,
    pending: booleanToInt(userModel.pending!),
    paymentType: userModel.paymentType as string,
  };
};

export {
  userSchemaToUserModel,
  userModelToUserSchema,
  createEventToUserSchema,
};
