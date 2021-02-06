"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCloudinaryConfig = void 0;
var cloudinary_1 = __importDefault(require("cloudinary"));
var setupCloudinaryConfig = function () {
    cloudinary_1.default.v2.config({});
};
exports.setupCloudinaryConfig = setupCloudinaryConfig;
