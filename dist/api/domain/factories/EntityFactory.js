"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../entities/User"));
var UserCollection_1 = __importDefault(require("../entities/UserCollection"));
var ModelAttributes_1 = __importDefault(require("../entities/ModelAttributes"));
var LocalSync_1 = __importDefault(require("../../infrastructure/data/LocalSync"));
var Food_1 = __importDefault(require("../entities/Food"));
var EntityFactory = /** @class */ (function () {
    function EntityFactory() {
    }
    EntityFactory.prototype.createUser = function () {
        return new User_1.default(new ModelAttributes_1.default({}), new LocalSync_1.default());
    };
    EntityFactory.prototype.createUsersCollection = function () {
        return new UserCollection_1.default(new LocalSync_1.default());
    };
    EntityFactory.prototype.createFood = function () {
        return new Food_1.default(new ModelAttributes_1.default({}), new LocalSync_1.default());
    };
    return EntityFactory;
}());
exports.default = EntityFactory;
