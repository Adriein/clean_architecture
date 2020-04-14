"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./Model"));
var Diet = /** @class */ (function (_super) {
    __extends(Diet, _super);
    function Diet(modelAttributes, sync, entityFactory) {
        var _this = _super.call(this, modelAttributes, sync) || this;
        _this.meals = [];
        _this.entityFactory = entityFactory;
        return _this;
    }
    Diet.prototype.generateMeals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var created, _a, id, numOfMeals, meal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        created = 0;
                        _a = this.getAttributes(), id = _a.id, numOfMeals = _a.numOfMeals;
                        _b.label = 1;
                    case 1:
                        if (!(created < numOfMeals)) return [3 /*break*/, 3];
                        meal = this.entityFactory.createMeal({
                            diet: id,
                            name: "meal n\u00BA" + (created + 1),
                        });
                        return [4 /*yield*/, meal.create(meal.getAttributes())];
                    case 2:
                        _b.sent();
                        this.meals = __spreadArrays(this.meals, [meal.getAttributes()]);
                        created++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Diet.prototype.incrementMeals = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var id, meal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.getAttributes().id;
                        meal = this.entityFactory.createMeal({
                            diet: id,
                            name: "meal n\u00BA" + (this.meals.length + 1),
                        });
                        return [4 /*yield*/, meal.create(meal.getAttributes())];
                    case 1:
                        _a.sent();
                        this.meals = __spreadArrays(this.meals, [meal.getAttributes()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Diet.prototype.decrementMeals = function (mealId) {
        return __awaiter(this, void 0, void 0, function () {
            var id, meal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.getAttributes().id;
                        meal = this.entityFactory.createMeal({
                            diet: id,
                        });
                        return [4 /*yield*/, meal.delete(mealId)];
                    case 1:
                        _a.sent();
                        this.meals = this.meals.filter(function (element) { return element.id != meal.get("id"); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Diet.prototype, "allMeals", {
        get: function () {
            return this.meals;
        },
        enumerable: true,
        configurable: true
    });
    return Diet;
}(Model_1.default));
exports.default = Diet;
