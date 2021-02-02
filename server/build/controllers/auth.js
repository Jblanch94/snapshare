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
exports.AuthController = void 0;
var user_1 = require("../services/user");
var jwtGenerator_1 = require("../utils/jwtGenerator");
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.registerUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, first_name, last_name, email, password, img, user, dataValues, token, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, first_name = _a.first_name, last_name = _a.last_name, email = _a.email, password = _a.password, img = _a.img;
                        // the only param not required is img, but if provided works as well
                        if (!first_name || !last_name || !email || !password) {
                            return [2 /*return*/, res.status(400).json("Missing registration information")];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.userService.fetchUserByEmail(email)];
                    case 2:
                        user = _b.sent();
                        if (user) {
                            return [2 /*return*/, res.status(400).json("Email already exists!")];
                        }
                        return [4 /*yield*/, this.userService.registerUser({
                                first_name: first_name,
                                last_name: last_name,
                                email: email,
                                password: password,
                            })];
                    case 3:
                        dataValues = (_b.sent()).dataValues;
                        token = jwtGenerator_1.jwtGenerator({ user_id: dataValues.id }, 60 * 10);
                        // send back access token in response and refresh token in cookie
                        res.cookie("refreshToken", jwtGenerator_1.jwtGenerator({ user_id: dataValues.id }, 60 * 15), { httpOnly: true, expires: new Date(Date.now() + 60 * 15 * 1000) });
                        // send back token to user
                        res.status(201).json({ accessToken: token });
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.error(err_1.message);
                        res.status(500).send(err_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        // Contorller for logging in a user
        this.loginUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, user, id, token, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        // validate if the email and password were received
                        if (!email || !password) {
                            return [2 /*return*/, res.status(400).json("Missing login information!")];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.loginUser({ email: email, password: password })];
                    case 2:
                        user = _b.sent();
                        if (user.message) {
                            throw user;
                        }
                        id = user.getDataValue("id");
                        token = jwtGenerator_1.jwtGenerator({ user_id: id }, 60 * 10);
                        res.cookie("refreshToken", jwtGenerator_1.jwtGenerator({ user_id: id }, 60 * 15), {
                            httpOnly: true,
                            expires: new Date(Date.now() + 60 * 15 * 1000),
                        });
                        res.json({ accessToken: token });
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        res.status(500).json(err_2.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.userService = new user_1.UserService();
    }
    return AuthController;
}());
exports.AuthController = AuthController;
