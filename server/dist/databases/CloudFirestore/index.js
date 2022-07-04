"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudFireStoreManger = void 0;
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../../../configuretion/service-account.json');
const Operation_1 = require("./Operation");
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
    getOperation(collection) {
        try {
            if (this.db !== null) {
                return new Operation_1.Operation(this.db, collection);
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
