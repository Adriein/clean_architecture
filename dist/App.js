"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var UserRoutes_1 = require("./routes/admin/UserRoutes");
var error_handler_1 = require("./routes/middelwares/error-handler");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
    }
    App.prototype.init = function () {
        this.setUpEnvironment();
        this.setUpMiddelwares();
        this.setUpRoutes();
        this.startServer();
    };
    App.prototype.setUpEnvironment = function () {
        this.app.set('port', process.env.PORT || 5000);
        console.log("App Environment: PORT: " + this.app.get('port') + " CONFIG: DEV ");
    };
    App.prototype.setUpMiddelwares = function () {
        this.app.use(body_parser_1.default.json());
    };
    App.prototype.setUpRoutes = function () {
        this.app.use('/api/admin', UserRoutes_1.userRouter);
        this.app.use(error_handler_1.errorHandler);
    };
    App.prototype.startServer = function () {
        this.app.listen(this.app.get('port'), function () {
            console.log("Server running...");
        });
    };
    return App;
}());
exports.default = App;
