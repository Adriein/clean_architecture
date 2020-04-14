"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../domain/entities");
var UserLocalSync_1 = __importDefault(require("../infrastructure/data/UserLocalSync"));
var FoodLocalSync_1 = __importDefault(require("../infrastructure/data/FoodLocalSync"));
var Logger_1 = __importDefault(require("../infrastructure/logs/Logger"));
var Diet_1 = __importDefault(require("../domain/entities/Diet"));
var DietLocalSync_1 = __importDefault(require("../infrastructure/data/DietLocalSync"));
var MealLocalSync_1 = __importDefault(require("../infrastructure/data/MealLocalSync"));
var DietMapper_1 = __importDefault(require("../infrastructure/data/mappers/DietMapper"));
var EntityAbstractFactory = /** @class */ (function () {
    function EntityAbstractFactory() {
    }
    EntityAbstractFactory.prototype.createUser = function () {
        return new entities_1.User(new entities_1.ModelAttributes({}), new UserLocalSync_1.default());
    };
    EntityAbstractFactory.prototype.createUserCollection = function () {
        return new entities_1.UserCollection(new UserLocalSync_1.default());
    };
    EntityAbstractFactory.prototype.createUserResponseModel = function () {
        return new entities_1.ResponseModel(new Logger_1.default());
    };
    EntityAbstractFactory.prototype.createFood = function () {
        return new entities_1.Food(new entities_1.ModelAttributes({}), new FoodLocalSync_1.default());
    };
    EntityAbstractFactory.prototype.createFoodCollection = function () {
        return new entities_1.FoodCollection(new FoodLocalSync_1.default());
    };
    EntityAbstractFactory.prototype.createFoodResponseModel = function () {
        return new entities_1.ResponseModel(new Logger_1.default());
    };
    EntityAbstractFactory.prototype.createMeal = function (body) {
        return new entities_1.Meal(new entities_1.ModelAttributes(body), new MealLocalSync_1.default(), this);
    };
    EntityAbstractFactory.prototype.createDiet = function (body) {
        return new Diet_1.default(new entities_1.ModelAttributes(body), new DietLocalSync_1.default(new DietMapper_1.default()), this);
    };
    EntityAbstractFactory.prototype.createDietReponseModel = function () {
        return new entities_1.ResponseModel(new Logger_1.default());
    };
    return EntityAbstractFactory;
}());
exports.default = EntityAbstractFactory;
