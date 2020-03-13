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
var DTOFood_1 = __importDefault(require("./DTOFood"));
var Users = /** @class */ (function () {
    function Users() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "first_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "last_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "sex", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Users.prototype, "age", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Users.prototype, "level", void 0);
    __decorate([
        typeorm_1.Column("double"),
        __metadata("design:type", Number)
    ], Users.prototype, "weight", void 0);
    __decorate([
        typeorm_1.Column("double"),
        __metadata("design:type", Number)
    ], Users.prototype, "height", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "nutrition_objective", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Users.prototype, "notes", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Users.prototype, "injuries", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Users.prototype, "user_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "rol", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return DTOFood_1.default; }, function (food) { return food.users; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Users.prototype, "foods", void 0);
    Users = __decorate([
        typeorm_1.Entity()
    ], Users);
    return Users;
}());
exports.default = Users;
