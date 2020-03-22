"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../domain/entities/User"));
var UserCollection_1 = __importDefault(require("../domain/entities/UserCollection"));
var ModelAttributes_1 = __importDefault(require("../domain/entities/ModelAttributes"));
var UserLocalSync_1 = __importDefault(require("../infrastructure/data/UserLocalSync"));
var ResponseModel_1 = __importDefault(require("../domain/entities/ResponseModel"));
var Logger_1 = __importDefault(require("../infrastructure/logs/Logger"));
var DomainEntityFactory = /** @class */ (function () {
    function DomainEntityFactory() {
    }
    DomainEntityFactory.prototype.createEntity = function () {
        return new User_1.default(new ModelAttributes_1.default({}), new UserLocalSync_1.default());
    };
    DomainEntityFactory.prototype.createCollection = function () {
        return new UserCollection_1.default(new UserLocalSync_1.default());
    };
    DomainEntityFactory.prototype.createResponseModel = function () {
        return new ResponseModel_1.default(new Logger_1.default());
    };
    return DomainEntityFactory;
}());
exports.default = DomainEntityFactory;
