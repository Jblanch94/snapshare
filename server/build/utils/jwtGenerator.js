"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtGenerator = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var keys_1 = require("../config/keys");
var jwtGenerator = function (payload, time) {
    console.log(time);
    var token = jsonwebtoken_1.default.sign(payload, keys_1.keys.jwt_secret, { expiresIn: time });
    return token;
};
exports.jwtGenerator = jwtGenerator;
