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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var UserSchema = /** @class */ (function () {
    function UserSchema() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            type: 'int',
            name: 'id',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'first_name',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'last_name',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "age", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "level", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'double',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "weight", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'double',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "height", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "objective", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "notes", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "injuries", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "rol", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], UserSchema.prototype, "pending", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], UserSchema.prototype, "paymentType", void 0);
    UserSchema = __decorate([
        typeorm_1.Entity()
    ], UserSchema);
    return UserSchema;
}());
exports.default = UserSchema;
