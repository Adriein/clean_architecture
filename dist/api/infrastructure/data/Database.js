"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import mysql, { Connection } from "mysql";
var typeorm_1 = require("typeorm");
var TableUser_1 = __importDefault(require("./entity/TableUser"));
var TableFood_1 = __importDefault(require("./entity/TableFood"));
var TableUserToFood_1 = __importDefault(require("./entity/TableUserToFood"));
var TableLog_1 = __importDefault(require("./entity/TableLog"));
//import util from "util";
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
        // return mysql.createConnection({
        //   host: "localhost",
        //   user: "root",
        //   password: "root",
        //   database: "nutrition_manager"
        // });
        var _this = this;
        typeorm_1.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "test",
            entities: [TableUser_1.default, TableFood_1.default, TableUserToFood_1.default, TableLog_1.default],
            synchronize: true
        }).then(function (connection) { return (_this._connection = connection); });
    };
    Object.defineProperty(Database.prototype, "connection", {
        get: function () {
            //   return util
            //     .promisify(this.connection.query)
            //     .call(this.connection, sqlStatement);
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    return Database;
}());
exports.default = Database;
