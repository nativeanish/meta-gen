"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = isObject;
exports.isString = isString;
exports.isValidInput = isValidInput;
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isString(value) {
    return typeof value === "string";
}
function isValidInput(data) {
    return isObject(data) && Object.keys(data).length > 0;
}
