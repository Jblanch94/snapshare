"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHanlder = void 0;
var apiError_1 = require("./apiError");
var errorHanlder = function (err, req, res, next) {
    console.error(err);
    if (err instanceof apiError_1.ApiError) {
        return res.status(err.statusCode).json(err.message);
    }
    res.status(500).json('Server Error');
};
exports.errorHanlder = errorHanlder;
