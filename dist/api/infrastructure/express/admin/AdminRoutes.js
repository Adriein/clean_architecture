"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Middelwares from "../Middelwares";
var AdminRoutes = /** @class */ (function () {
    function AdminRoutes(router, controller) {
        this.router = router;
        this.controller = controller;
        this.setUpRoutes();
    }
    AdminRoutes.prototype.setUpRoutes = function () {
        this.userManagementRoutes();
        this.foodManagementRoutes();
        this.dietManagementRoutes();
    };
    AdminRoutes.prototype.userManagementRoutes = function () {
        var _this = this;
        this.router
            .get("/overview", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.getAllUsersProfiles()];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .get("/profile/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.getUserProfile(req.params.id)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .post("/profile", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.createUser(req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .put("/profile/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, this.controller.editUser(req.params.id, req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .delete("/profile/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.deleteUser(parseInt(req.params.id))];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdminRoutes.prototype.foodManagementRoutes = function () {
        var _this = this;
        this.router
            .get("/food/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.retriveFood(req.params.id)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .get("/food", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.getAllFoods()];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .post("/food", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.createFood(req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .put("/food/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.updateFood(req.params.id, req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdminRoutes.prototype.dietManagementRoutes = function () {
        var _this = this;
        this.router
            .post("/diet", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.createDiet(req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); })
            .put("/diet/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.updateDiet(parseInt(req.params.id), req.body)];
                    case 1:
                        response = _a.sent();
                        if (!response.getError()) {
                            res.status(response.getStatus()).send(response.getData());
                            return [2 /*return*/];
                        }
                        res.status(response.getStatus()).send(response.getError());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdminRoutes.prototype.getAdminRouter = function () {
        return this.router;
    };
    return AdminRoutes;
}());
exports.default = AdminRoutes;
