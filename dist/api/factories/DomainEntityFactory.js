"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../domain/entities/User"));
var UserCollection_1 = __importDefault(require("../domain/entities/UserCollection"));
var ModelAttributes_1 = __importDefault(require("../domain/entities/ModelAttributes"));
var UserLocalSync_1 = __importDefault(require("../infrastructure/data/UserLocalSync"));
var EntityFactory = /** @class */ (function () {
    function EntityFactory() {
    }
    EntityFactory.prototype.createUser = function () {
        return new User_1.default(new ModelAttributes_1.default({}), new UserLocalSync_1.default());
    };
    EntityFactory.prototype.createUsersCollection = function () {
        return new UserCollection_1.default(new UserLocalSync_1.default());
    };
    return EntityFactory;
}());
exports.default = EntityFactory;
