"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var apiError_1 = require("./apiError");
var errorHandler = function (err, req, res, next) {
    console.error(err);
    if (err instanceof apiError_1.ApiError) {
        return res.status(err.statusCode).json(err.message);
    }
    res.status(500).json('Server Error');
};
exports.errorHandler = errorHandler;
