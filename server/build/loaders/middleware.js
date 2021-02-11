"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMiddleware = void 0;
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var loadMiddleware = function (app, express) {
    app.use(express.json());
    app.use(cookie_parser_1.default());
};
exports.loadMiddleware = loadMiddleware;
