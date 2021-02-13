"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
var ApiError = /** @class */ (function () {
    function ApiError(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
    ApiError.badRequest = function (message) {
        return new ApiError(400, message);
    };
    ApiError.unauthenticated = function (message) {
        return new ApiError(401, message);
    };
    ApiError.internal = function () {
        return new ApiError(500, 'Server Error!');
    };
    return ApiError;
}());
exports.ApiError = ApiError;
