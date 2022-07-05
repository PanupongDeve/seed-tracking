"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("../../../utils/express");
const toSnakeCase_1 = require("../../../utils/toSnakeCase");
const users_1 = __importDefault(require("../../../services/users"));
const User_1 = require("../../../models/User");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.getAll();
        res.send({
            status: 200,
            data: (0, toSnakeCase_1.toSnakeCase)(users)
        });
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: error })
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            status: 400,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: 'body is required!' })
        });
    }
    else {
        req.body.status = 'inactive';
        const message = yield users_1.default.create(req.body);
        res.send({
            status: 200,
            data: (0, toSnakeCase_1.toSnakeCase)({ message })
        });
    }
}));
router.put('/', (req, res) => {
    res.send({
        status: 403,
        data: (0, toSnakeCase_1.toSnakeCase)({ message: 'method not allow' })
    });
});
router.delete('/', (req, res) => {
    res.send({
        status: 403,
        data: (0, toSnakeCase_1.toSnakeCase)({ message: 'method not allow' })
    });
});
router.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.getById(req.params.userId);
    if (users === null || users === void 0 ? void 0 : users.isEmpty) {
        res.status(404).send({
            status: 404,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: "not found" })
        });
    }
    else {
        res.send({
            status: 200,
            data: (0, toSnakeCase_1.toSnakeCase)(users === null || users === void 0 ? void 0 : users.data)
        });
    }
}));
router.post('/:userId', (req, res) => {
    res.send({
        status: 403,
        data: (0, toSnakeCase_1.toSnakeCase)({ message: 'method not allow' })
    });
});
router.put('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            status: 400,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: 'body is required!' })
        });
    }
    else {
        let input = new User_1.UserUpdate(req.body);
        input.clear();
        const user = yield users_1.default.updateById(req.params.userId, input);
        if (user === null || user === void 0 ? void 0 : user.isEmpty) {
            res.status(404).send({
                status: 404,
                data: (0, toSnakeCase_1.toSnakeCase)({ message: "not found" })
            });
        }
        else {
            res.send({
                status: 200,
                data: (0, toSnakeCase_1.toSnakeCase)({ message: 'update user success' })
            });
        }
    }
}));
router.delete('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.delete(req.params.userId);
    if (users === null || users === void 0 ? void 0 : users.isEmpty) {
        res.status(404).send({
            status: 404,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: "not found" })
        });
    }
    else {
        res.send({
            status: 200,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: 'delete user success' })
        });
    }
}));
router.put('/:userId/restore', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.restore(req.params.userId);
    if (users === null || users === void 0 ? void 0 : users.isEmpty) {
        res.status(404).send({
            status: 404,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: "not found" })
        });
    }
    else {
        res.send({
            status: 200,
            data: (0, toSnakeCase_1.toSnakeCase)({ message: 'restore user success' })
        });
    }
}));
const usersRouter = (0, express_1.createRouter)('v1', 'users', router);
exports.default = usersRouter;
