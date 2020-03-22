"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var WinstonLogger = /** @class */ (function () {
    function WinstonLogger() {
        this.logger = this.createLogger();
    }
    WinstonLogger.prototype.createLogger = function () {
        //const { combine, timestamp, prettyPrint } = format;
        return winston_1.default.createLogger({
            transports: [
                new winston_1.default.transports.File({
                    filename: "error.log",
                    level: "error",
                    format: winston_1.default.format.json()
                })
            ]
        });
    };
    WinstonLogger.prototype.log = function (message, level) {
        if (level === void 0) { level = "error"; }
        this.logger.log({
            level: level,
            message: message
        });
    };
    return WinstonLogger;
}());
exports.default = WinstonLogger;
