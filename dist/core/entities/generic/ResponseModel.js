"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseModel = /** @class */ (function () {
    // private logger: ILogger;
    function ResponseModel(logger) {
        // this.logger = logger;
    }
    ResponseModel.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    ResponseModel.prototype.getData = function () {
        return this.data;
    };
    return ResponseModel;
}());
exports.default = ResponseModel;
