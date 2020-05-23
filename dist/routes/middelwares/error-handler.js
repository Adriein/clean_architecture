"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../../core/entities");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof entities_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.error(err);
    res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
