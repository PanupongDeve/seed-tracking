"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.camelToSnakeCase = void 0;
const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
exports.camelToSnakeCase = camelToSnakeCase;
const isObject = function (obj) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};
const toSnakeCase = (obj) => {
    if (isObject(obj)) {
        const n = {};
        Object.keys(obj)
            .forEach((k) => {
            n[(0, exports.camelToSnakeCase)(k)] = (0, exports.toSnakeCase)(obj[k]);
        });
        return n;
    }
    else if (Array.isArray(obj)) {
        return obj.map((i) => {
            return (0, exports.toSnakeCase)(i);
        });
    }
    return obj;
};
exports.toSnakeCase = toSnakeCase;
