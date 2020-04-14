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
var entity_1 = require("../entity");
var Mapper_1 = __importDefault(require("./Mapper"));
var DietMapper = /** @class */ (function (_super) {
    __extends(DietMapper, _super);
    function DietMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DietMapper.prototype.mapToDatabase = function (props, fn) {
        var _a;
        var dietSchema = _super.prototype.mapToDatabase.call(this, props, fn);
        var userSchema = new entity_1.TableUser();
        userSchema.id = props.user;
        dietSchema.user = userSchema;
        dietSchema.meals = (_a = dietSchema.meals) === null || _a === void 0 ? void 0 : _a.map(function (meal) { return Object.assign(new entity_1.TableMeal(), meal); });
        return dietSchema;
    };
    return DietMapper;
}(Mapper_1.default));
exports.default = DietMapper;
