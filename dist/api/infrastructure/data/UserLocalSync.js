"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("./Database"));
var entity_1 = require("./entity");
var UserLocalSync = /** @class */ (function () {
    function UserLocalSync() {
        this.db = Database_1.default.getInstance();
    }
    UserLocalSync.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.connection.getRepository(entity_1.TableUser).find()];
                    case 1: return [2 /*return*/, (_a.sent())];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error("fallo al leer");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserLocalSync.prototype.fetch = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, asociatedFoods, foodObject, _i, asociatedFoods_1, relatedFood, food, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.db.connection.getRepository(entity_1.TableUser).findOne(id)];
                    case 1:
                        user = (_a.sent());
                        if (!(user != undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.db.connection
                                .getRepository(entity_1.TableUserToFood)
                                .find({ where: { userId: id } })];
                    case 2:
                        asociatedFoods = _a.sent();
                        foodObject = [];
                        _i = 0, asociatedFoods_1 = asociatedFoods;
                        _a.label = 3;
                    case 3:
                        if (!(_i < asociatedFoods_1.length)) return [3 /*break*/, 6];
                        relatedFood = asociatedFoods_1[_i];
                        return [4 /*yield*/, this.db.connection
                                .getRepository(entity_1.TableFood)
                                .findOne(relatedFood.foodId)];
                    case 4:
                        food = _a.sent();
                        if (food != undefined) {
                            foodObject.push({
                                id: food.id,
                                name: food.name,
                                like: relatedFood.like
                            });
                        }
                        else {
                            throw new Error("food not found");
                        }
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        //set foodObject to the user
                        user.foods = foodObject;
                        return [2 /*return*/, user];
                    case 7: throw new Error("user not found");
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_2 = _a.sent();
                        throw error_2;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    UserLocalSync.prototype.create = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var parsed, parsedFoods, savedUser, _i, parsedFoods_1, foodObject, foodModel, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        parsed = JSON.parse(JSON.stringify(model));
                        parsedFoods = JSON.parse("[" + parsed.foods + "]");
                        //Delete unnecesary model params
                        delete parsed.foods;
                        return [4 /*yield*/, this.db.connection.getRepository(entity_1.TableUser).save(parsed)];
                    case 1:
                        savedUser = _a.sent();
                        _i = 0, parsedFoods_1 = parsedFoods;
                        _a.label = 2;
                    case 2:
                        if (!(_i < parsedFoods_1.length)) return [3 /*break*/, 5];
                        foodObject = parsedFoods_1[_i];
                        foodModel = new entity_1.TableUserToFood();
                        foodModel.userId = savedUser.id;
                        foodModel.foodId = foodObject.id;
                        foodModel.like = foodObject.like == "true" ? true : false;
                        return [4 /*yield*/, this.db.connection.getRepository(entity_1.TableUserToFood).save(foodModel)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, savedUser.id];
                    case 6:
                        error_3 = _a.sent();
                        throw error_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserLocalSync.prototype.update = function (id, model) {
        return __awaiter(this, void 0, void 0, function () {
            var userSchema, foodSchema, user, parsedFoods, _i, parsedFoods_2, food, relatedFoods, foodModel, savedUser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        userSchema = this.db.connection.getRepository(entity_1.TableUser);
                        foodSchema = this.db.connection.getRepository(entity_1.TableUserToFood);
                        return [4 /*yield*/, userSchema.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error("user not found");
                        }
                        parsedFoods = JSON.parse("[" + model.foods + "]");
                        _i = 0, parsedFoods_2 = parsedFoods;
                        _a.label = 2;
                    case 2:
                        if (!(_i < parsedFoods_2.length)) return [3 /*break*/, 8];
                        food = parsedFoods_2[_i];
                        return [4 /*yield*/, foodSchema.find({
                                where: { userId: user.id, foodId: food.id }
                            })];
                    case 3:
                        relatedFoods = _a.sent();
                        foodModel = new entity_1.TableUserToFood();
                        foodModel.userId = user.id || 0;
                        foodModel.foodId = food.id;
                        foodModel.like = food.like == "true" ? true : false;
                        if (!(relatedFoods.length == 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, foodSchema.save(foodModel)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, foodSchema.save(Object.assign(relatedFoods[0], foodModel))];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8:
                        //Delete unnecesary model params
                        delete model.foods;
                        return [4 /*yield*/, userSchema.save(Object.assign(user, model))];
                    case 9:
                        savedUser = _a.sent();
                        if (savedUser && savedUser.id) {
                            return [2 /*return*/, savedUser.id];
                        }
                        else {
                            throw new Error("filed to update user");
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        error_4 = _a.sent();
                        throw error_4;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    UserLocalSync.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userSchema, user, status, savedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userSchema = this.db.connection.getRepository(entity_1.TableUser);
                        return [4 /*yield*/, userSchema.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error("user not found");
                        }
                        status = !user.user_status;
                        user.user_status = status;
                        return [4 /*yield*/, userSchema.save(user)];
                    case 2:
                        savedUser = (_a.sent());
                        if (savedUser) {
                            return [2 /*return*/, savedUser];
                        }
                        throw new Error("failed to delete user");
                }
            });
        });
    };
    return UserLocalSync;
}());
exports.default = UserLocalSync;
