"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var DietSchema_1 = __importDefault(require("./DietSchema"));
var _1 = require(".");
var Meal = /** @class */ (function () {
    function Meal() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Meal.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Meal.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("double", { nullable: true }),
        __metadata("design:type", Number)
    ], Meal.prototype, "totalKcal", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return DietSchema_1.default; }, function (diet) { return diet.meals; }),
        __metadata("design:type", DietSchema_1.default)
    ], Meal.prototype, "diet", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return _1.TableFood; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Meal.prototype, "foods", void 0);
    Meal = __decorate([
        typeorm_1.Entity()
    ], Meal);
    return Meal;
}());
exports.default = Meal;
