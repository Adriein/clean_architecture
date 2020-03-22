"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var entity_1 = require("./entity");
var Database = /** @class */ (function () {
    function Database() {
        this.setUpDataBase();
    }
    Database.getInstance = function () {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.setUpDataBase = function () {
        var _this = this;
        typeorm_1.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "test",
            entities: [entity_1.TableUser, entity_1.TableFood, entity_1.TableUserToFood, entity_1.TableLog],
            synchronize: true
        }).then(function (connection) { return (_this._connection = connection); });
    };
    Object.defineProperty(Database.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    return Database;
}());
exports.default = Database;
