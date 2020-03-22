"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseModel = /** @class */ (function () {
    function ResponseModel(logger) {
        this.logger = logger;
    }
    ResponseModel.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    ResponseModel.prototype.getStatus = function () {
        return this.status;
    };
    ResponseModel.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    ResponseModel.prototype.getData = function () {
        return this.data;
    };
    ResponseModel.prototype.setError = function (error) {
        this.error = error.message;
        if (error.message.includes("not found")) {
            this.setStatus(404);
        }
        else {
            this.setStatus(500);
        }
        this.logger
            .stack(error.stack)
            .level("error")
            .log(error.message);
        return this;
    };
    ResponseModel.prototype.getError = function () {
        return this.error;
    };
    return ResponseModel;
}());
exports.default = ResponseModel;
