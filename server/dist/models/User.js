"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdate = exports.UserCreate = void 0;
class UserCreate {
    constructor({ goolge_id, name, status }) {
        this.google_id = '';
        this.name = '';
        this.status = '';
        this.google_id = goolge_id;
        this.name = name;
        this.status = status;
    }
}
exports.UserCreate = UserCreate;
class UserUpdate {
    constructor({ google_id, name, status }) {
        this.google_id = '';
        this.name = '';
        this.status = '';
        if (google_id) {
            this.google_id = google_id;
        }
        if (name) {
            this.name = name;
        }
        if (status) {
            this.status = status;
        }
    }
    clear() {
        // console.log(this)
        delete this.status;
        if (this.name === '') {
            delete this.name;
        }
        if (this.google_id === '') {
            delete this.google_id;
        }
    }
}
exports.UserUpdate = UserUpdate;
