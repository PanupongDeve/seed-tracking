"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamel = exports.snakeToCamel = void 0;
const snakeToCamel = (snakeCaseString) => snakeCaseString.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
exports.snakeToCamel = snakeToCamel;
const isObject = function (obj) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};
const toCamel = (obj) => {
    if (isObject(obj)) {
        const n = {};
        Object.keys(obj)
            .forEach((k) => {
            n[(0, exports.snakeToCamel)(k)] = (0, exports.toCamel)(obj[k]);
        });
        return n;
    }
    else if (Array.isArray(obj)) {
        return obj.map((i) => {
            return (0, exports.toCamel)(i);
        });
    }
    return obj;
};
exports.toCamel = toCamel;
