"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomError_1 = __importDefault(require("../generic/CustomError"));
var UserNotFoundError = /** @class */ (function (_super) {
    __extends(UserNotFoundError, _super);
    function UserNotFoundError() {
        var _this = _super.call(this, 'User not found') || this;
        _this.statusCode = 404;
        Object.setPrototypeOf(_this, UserNotFoundError.prototype);
        return _this;
    }
    UserNotFoundError.prototype.serializeErrors = function () {
        return [{ message: 'User not found' }];
    };
    return UserNotFoundError;
}(CustomError_1.default));
exports.UserNotFoundError = UserNotFoundError;