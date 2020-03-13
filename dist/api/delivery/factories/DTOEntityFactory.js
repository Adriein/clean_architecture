"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DTOUser_1 = __importDefault(require("../infrastructure/data/entity/DTOUser"));
var DTOFood_1 = __importDefault(require("../infrastructure/data/entity/DTOFood"));
var DTOEntityFactory = /** @class */ (function () {
    function DTOEntityFactory() {
    }
    DTOEntityFactory.prototype.createUsersCollection = function () {
        throw new Error();
    };
    DTOEntityFactory.prototype.createUser = function () {
        return new DTOUser_1.default();
    };
    DTOEntityFactory.prototype.createFood = function () {
        return new DTOFood_1.default();
    };
    return DTOEntityFactory;
}());
exports.default = DTOEntityFactory;
