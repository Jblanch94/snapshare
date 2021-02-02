"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtGenerator = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var keys_1 = require("../config/keys");
/**
 * Function that generates a jwt token
 * @param payload - string containing the user id
 * @param time - the expiration time as a string or number
 * @returns {string} - returns the token as a string
 */
var jwtGenerator = function (payload, time) {
    var token = jsonwebtoken_1.default.sign(payload, keys_1.keys.jwt_secret, { expiresIn: time });
    return token;
};
exports.jwtGenerator = jwtGenerator;
