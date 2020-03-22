"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseModel = /** @class */ (function () {
    function ResponseModel() {
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
        if (typeof error == "object") {
            this.error = error.message;
        }
        else {
            this.error = error;
        }
        return this;
    };
    ResponseModel.prototype.getError = function () {
        return this.error;
    };
    return ResponseModel;
}());
exports.default = ResponseModel;
