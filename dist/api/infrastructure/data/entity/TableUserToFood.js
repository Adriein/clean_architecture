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
var TableUser_1 = __importDefault(require("./TableUser"));
var TableFood_1 = __importDefault(require("./TableFood"));
var TableUserToFood = /** @class */ (function () {
    function TableUserToFood() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TableUserToFood.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TableUserToFood.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TableUserToFood.prototype, "foodId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], TableUserToFood.prototype, "like", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return TableUser_1.default; }, function (user) { return user.foods; }),
        __metadata("design:type", TableUser_1.default)
    ], TableUserToFood.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return TableFood_1.default; }, function (food) { return food.users; }),
        __metadata("design:type", TableFood_1.default)
    ], TableUserToFood.prototype, "food", void 0);
    TableUserToFood = __decorate([
        typeorm_1.Entity()
    ], TableUserToFood);
    return TableUserToFood;
}());
exports.default = TableUserToFood;
