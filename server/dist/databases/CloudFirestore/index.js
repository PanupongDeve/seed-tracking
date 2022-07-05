"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudFireStoreManger = void 0;
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../../../configuretion/service-account.json');
const UserDB_1 = require("./UserDB");
class CloudFireStoreManger {
    constructor() {
        this.db = null;
    }
    init() {
        try {
            initializeApp({
                credential: cert(serviceAccount)
            });
            this.db = getFirestore();
        }
        catch (error) {
            console.log(error);
        }
    }
    getUserDB() {
        try {
            if (this.db !== null) {
                return new UserDB_1.UsersDB(this.db, 'users');
            }
            else {
                throw new ReferenceError("Cannot Call Cloud Firestore Operation");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
const cloudFireStoreManger = new CloudFireStoreManger();
exports.cloudFireStoreManger = cloudFireStoreManger;
