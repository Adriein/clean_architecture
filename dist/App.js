"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var body_parser_1 = __importDefault(require("body-parser"));
//import AuthRoutes from "./api/routes/auth/AuthRoutes";
var EntityFactory_1 = __importDefault(require("./api/domain/factories/EntityFactory"));
var AdminRoutes_1 = __importDefault(require("./api/infrastructure/express/admin/AdminRoutes"));
var Controller_1 = __importDefault(require("./api/delivery/Controller"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.router = express_1.default.Router();
        this.entityFactory = new EntityFactory_1.default();
        this.controller = new Controller_1.default(this.entityFactory);
    }
    App.prototype.init = function () {
        this.setUpEnvironment();
        this.setUpMiddelwares();
        this.setUpRoutes();
        this.startServer();
    };
    App.prototype.setUpEnvironment = function () {
        this.app.set("port", process.env.PORT || 5000);
        console.log("App Environment: PORT: " + this.app.get("port") + " CONFIG: DEV ");
    };
    App.prototype.setUpMiddelwares = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cookie_session_1.default({ keys: ["fjrufjhruf"] }));
    };
    App.prototype.setUpRoutes = function () {
        //this.app.use("/api/auth", new AuthRoutes(this.router).router);
        this.app.use("/api/admin", new AdminRoutes_1.default(this.router, this.entityFactory).getAdminRouter());
    };
    App.prototype.startServer = function () {
        this.app.listen(this.app.get("port"), function () {
            console.log("Server running...");
        });
    };
    return App;
}());
exports.default = App;
