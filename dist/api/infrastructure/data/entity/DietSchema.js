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
var _1 = require(".");
var DietSchema = /** @class */ (function () {
    function DietSchema() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], DietSchema.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Date)
    ], DietSchema.prototype, "validTo", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], DietSchema.prototype, "createDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ nullable: true }),
        __metadata("design:type", Date)
    ], DietSchema.prototype, "updateDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], DietSchema.prototype, "numOfMeals", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return TableUser_1.default; }, function (user) { return user.diets; }),
        __metadata("design:type", TableUser_1.default)
    ], DietSchema.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return _1.TableMeal; }, function (meal) { return meal.diet; }),
        __metadata("design:type", Array)
    ], DietSchema.prototype, "meals", void 0);
    DietSchema = __decorate([
        typeorm_1.Entity()
    ], DietSchema);
    return DietSchema;
}());
exports.default = DietSchema;
