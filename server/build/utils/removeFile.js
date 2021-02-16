"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlinkAsync = void 0;
var util_1 = require("util");
var fs_1 = __importDefault(require("fs"));
exports.unlinkAsync = util_1.promisify(fs_1.default.unlink);
