"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var keys_1 = require("../config/keys");
var decodeToken = function (token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, keys_1.keys.jwt_secret);
        return decoded;
    }
    catch (err) {
        return err;
    }
};
exports.decodeToken = decodeToken;
