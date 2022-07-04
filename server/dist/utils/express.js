"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = exports.Router = void 0;
const express_1 = require("express");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
const createRouter = (version, name, contentRouter) => {
    const router = (0, express_1.Router)();
    return router.use(`/${version}/${name}`, contentRouter);
};
exports.createRouter = createRouter;
