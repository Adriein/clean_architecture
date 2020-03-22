"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TableLog_1 = __importDefault(require("../data/entity/TableLog"));
var Database_1 = __importDefault(require("../data/Database"));
var Logger = /** @class */ (function () {
    function Logger() {
        this.db = Database_1.default.getInstance();
    }
    Logger.prototype.log = function (message) {
        var log = new TableLog_1.default();
        log.level = this._level;
        log.stack_trace = this._stack;
        log.message = message;
        this.db.connection.getRepository(TableLog_1.default).save(log);
    };
    Logger.prototype.stack = function (stack) {
        if (stack === void 0) { stack = 'not stack setted'; }
        this._stack = stack;
        return this;
    };
    Logger.prototype.level = function (level) {
        this._level = level;
        return this;
    };
    return Logger;
}());
exports.default = Logger;
