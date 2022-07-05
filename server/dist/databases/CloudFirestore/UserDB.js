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
exports.UsersDB = void 0;
const shortId_1 = require("../../utils/shortId");
class UsersDB {
    constructor(db, collection) {
        this.db = db;
        this.collection = collection;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let items = [];
                const snapshot = yield this.db.collection(this.collection).get();
                snapshot.forEach((doc) => {
                    items.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return items;
            }
            catch (error) {
                console.log(error);
                throw "Internal Server Error";
            }
        });
    }
    getByIds(ids = []) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cityRef = this.db.collection(this.collection).doc(id);
                const doc = yield cityRef.get();
                if (!doc.exists) {
                    return {
                        isEmpty: true,
                        data: {}
                    };
                }
                else {
                    return {
                        isEmpty: false,
                        data: doc.data()
                    };
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create(value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                value.id = (0, shortId_1.generateShortId)();
                value.role = 'member';
                const docRef = this.db.collection(this.collection).doc(value.id);
                yield docRef.set(JSON.parse(JSON.stringify(value)));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let oldData = yield this.getById(id);
                if (oldData === null || oldData === void 0 ? void 0 : oldData.isEmpty) {
                    return oldData;
                }
                else {
                    let newData = Object.assign(Object.assign({}, oldData === null || oldData === void 0 ? void 0 : oldData.data), body);
                    const docRef = this.db.collection(this.collection).doc(id);
                    yield docRef.set(JSON.parse(JSON.stringify(newData)));
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let oldData = yield this.getById(id);
                if (oldData === null || oldData === void 0 ? void 0 : oldData.isEmpty) {
                    return oldData;
                }
                else {
                    let newData = Object.assign(Object.assign({}, oldData === null || oldData === void 0 ? void 0 : oldData.data), { status: 'inactive' });
                    const docRef = this.db.collection(this.collection).doc(id);
                    yield docRef.set(JSON.parse(JSON.stringify(newData)));
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    restore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let oldData = yield this.getById(id);
                if (oldData === null || oldData === void 0 ? void 0 : oldData.isEmpty) {
                    return oldData;
                }
                else {
                    let newData = Object.assign(Object.assign({}, oldData === null || oldData === void 0 ? void 0 : oldData.data), { status: 'active' });
                    const docRef = this.db.collection(this.collection).doc(id);
                    yield docRef.set(JSON.parse(JSON.stringify(newData)));
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UsersDB = UsersDB;
