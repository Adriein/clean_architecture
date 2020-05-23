"use strict";
// import { IMapper } from "../../../core/interfaces";
Object.defineProperty(exports, "__esModule", { value: true });
var STATUS;
(function (STATUS) {
    STATUS["active"] = "active";
    STATUS["inactive"] = "inactive";
    STATUS["pause"] = "pause";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var ROL;
(function (ROL) {
    ROL["admin"] = "admin";
    ROL["user"] = "user";
})(ROL = exports.ROL || (exports.ROL = {}));
var PAYMENT;
(function (PAYMENT) {
    PAYMENT["mensual"] = "mensual";
    PAYMENT["trimestral"] = "trimestral";
    PAYMENT["anual"] = "anual";
})(PAYMENT = exports.PAYMENT || (exports.PAYMENT = {}));
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
var intToBoolean = function (num) { return (num === 0 ? false : true); };
var booleanToInt = function (bool) { return (bool === false ? 0 : 1); };
var userSchemaToUserModel = function (userSchema) {
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
        status: userSchema.status,
        rol: userSchema.rol,
        pending: intToBoolean(userSchema.pending),
        paymentType: userSchema.paymentType,
    };
};
exports.userSchemaToUserModel = userSchemaToUserModel;
var userModelToUserSchema = function (userModel) {
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
        status: userModel.status,
        rol: userModel.rol,
        pending: booleanToInt(userModel.pending),
        paymentType: userModel.paymentType,
    };
};
exports.userModelToUserSchema = userModelToUserSchema;
var createEventToUserSchema = function (userModel) {
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
        status: userModel.status,
        rol: userModel.rol,
        pending: booleanToInt(userModel.pending),
        paymentType: userModel.paymentType,
    };
};
exports.createEventToUserSchema = createEventToUserSchema;
