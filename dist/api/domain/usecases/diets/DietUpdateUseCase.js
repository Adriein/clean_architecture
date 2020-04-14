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
Object.defineProperty(exports, "__esModule", { value: true });
var DietCreateUseCase = /** @class */ (function () {
    function DietCreateUseCase(entityFactory) {
        this.entityFactory = entityFactory;
    }
    DietCreateUseCase.prototype.execute = function (id, body) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var diet, mealsFromBody, meals, result, _i, result_1, meal, result, _d, result_2, meal;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        diet = this.entityFactory.createDiet(body);
                        mealsFromBody = [];
                        //parse meals in the body
                        (_a = body.meals) === null || _a === void 0 ? void 0 : _a.forEach(function (meal) {
                            mealsFromBody.push(JSON.parse(meal));
                        });
                        //fetch the diet stored in the db
                        return [4 /*yield*/, diet.fetch(id)];
                    case 1:
                        //fetch the diet stored in the db
                        _e.sent();
                        return [4 /*yield*/, diet.findBy({
                                select: ["id"],
                                relations: ["meals"],
                                where: { id: diet.get("id") },
                            })];
                    case 2:
                        meals = (_e.sent())[0].meals;
                        if (!(mealsFromBody.length != ((_b = meals) === null || _b === void 0 ? void 0 : _b.length))) return [3 /*break*/, 11];
                        if (!(mealsFromBody.length < ((_c = meals) === null || _c === void 0 ? void 0 : _c.length))) return [3 /*break*/, 7];
                        result = this.compare(mealsFromBody, meals);
                        _i = 0, result_1 = result;
                        _e.label = 3;
                    case 3:
                        if (!(_i < result_1.length)) return [3 /*break*/, 6];
                        meal = result_1[_i];
                        return [4 /*yield*/, diet.decrementMeals(meal.id)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 11];
                    case 7:
                        result = this.compare(meals, mealsFromBody);
                        _d = 0, result_2 = result;
                        _e.label = 8;
                    case 8:
                        if (!(_d < result_2.length)) return [3 /*break*/, 11];
                        meal = result_2[_d];
                        return [4 /*yield*/, diet.incrementMeals(meal)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10:
                        _d++;
                        return [3 /*break*/, 8];
                    case 11: return [2 /*return*/, { id: 1 }];
                }
            });
        });
    };
    //array 1 MUST BE THE SHORTEST
    DietCreateUseCase.prototype.compare = function (array1, array2) {
        array1.forEach(function (element1) {
            return array2.forEach(function (element2, index) {
                if (element1.id == element2.id) {
                    array2.splice(index, 1);
                }
            });
        });
        return array2;
    };
    return DietCreateUseCase;
}());
exports.default = DietCreateUseCase;
