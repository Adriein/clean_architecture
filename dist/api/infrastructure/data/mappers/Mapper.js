"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mapper = /** @class */ (function () {
    function Mapper() {
    }
    Mapper.prototype.mapToDatabase = function (props, fn) {
        for (var prop in props) {
            if (props[prop] instanceof Array) {
                var array = props[prop];
                props[prop] = array.map(function (element) { return JSON.parse(element); });
            }
        }
        return Object.assign(fn(), props);
    };
    Mapper.prototype.mapToDomain = function (props) {
        return props;
    };
    return Mapper;
}());
exports.default = Mapper;
