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
Object.defineProperty(exports, "__esModule", { value: true });
const CloudFirestore_1 = require("../../databases/CloudFirestore");
class UserServices {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            yield (users === null || users === void 0 ? void 0 : users.create(body));
            return "add users successful!";
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            return yield (users === null || users === void 0 ? void 0 : users.get());
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            return yield (users === null || users === void 0 ? void 0 : users.getById(userId));
        });
    }
    updateById(userId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            const data = yield (users === null || users === void 0 ? void 0 : users.update(userId, body));
            return data;
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            const data = yield (users === null || users === void 0 ? void 0 : users.delete(userId));
            return data;
        });
    }
    restore(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = CloudFirestore_1.cloudFireStoreManger.getUserDB();
            const data = yield (users === null || users === void 0 ? void 0 : users.restore(userId));
            return data;
        });
    }
}
const userServices = new UserServices();
exports.default = userServices;
