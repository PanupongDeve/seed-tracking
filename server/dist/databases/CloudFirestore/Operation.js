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
exports.Operation = void 0;
const shortId_1 = require("../../utils/shortId");
class Operation {
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
    getByIds() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getById() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    create(value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = this.db.collection(this.collection).doc((0, shortId_1.generateShortId)());
                yield docRef.set(value);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Operation = Operation;
