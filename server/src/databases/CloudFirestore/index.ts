const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../../../configuretion/service-account.json');


import { UsersDB } from './UserDB'

class CloudFireStoreManger {
    db: any = null;

    init() {
        try {
            initializeApp({
                credential: cert(serviceAccount)
            })
            this.db = getFirestore();
           
        } catch (error) {
            console.log(error)
        }
    }

    getUserDB() {
        try {
            if (this.db !== null) {
                
                return new UsersDB(this.db, 'users')
            } else {
                throw new ReferenceError("Cannot Call Cloud Firestore Operation")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const cloudFireStoreManger = new CloudFireStoreManger()

export {
    cloudFireStoreManger
}