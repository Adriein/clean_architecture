"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../domain/entities");
var UserLocalSync_1 = __importDefault(require("../infrastructure/data/UserLocalSync"));
var Logger_1 = __importDefault(require("../infrastructure/logs/Logger"));
var DomainEntityFactory = /** @class */ (function () {
    function DomainEntityFactory() {
    }
    DomainEntityFactory.prototype.createEntity = function () {
        return new entities_1.User(new entities_1.ModelAttributes({}), new UserLocalSync_1.default());
    };
    DomainEntityFactory.prototype.createCollection = function () {
        return new entities_1.UserCollection(new UserLocalSync_1.default());
    };
    DomainEntityFactory.prototype.createResponseModel = function () {
        return new entities_1.ResponseModel(new Logger_1.default());
    };
    return DomainEntityFactory;
}());
exports.default = DomainEntityFactory;
