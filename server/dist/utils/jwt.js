"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthToken {
    constructor() {
        this.bcryptjs = bcryptjs_1.default;
        this.jwt = jsonwebtoken_1.default;
        this.salt = 'p@sSw0rd';
    }
    static getInstnace() {
        return this.instance;
    }
    encryptPassword(password) {
        return this.bcryptjs.hashSync(password);
    }
    comparePassword(password, comparePassword) {
        return this.bcryptjs.compareSync(password, comparePassword);
    }
    generateToken(payload) {
        return this.jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1),
            payload
        }, this.salt);
    }
    refreshToken(token) {
        const oldPayload = this.jwt.verify(token, this.salt);
        return this.generateToken(oldPayload);
    }
    verifyToken(token) {
        return this.jwt.verify(token, this.salt);
    }
    decodeToken(token) {
        return this.jwt.decode(token);
    }
}
AuthToken.instance = new AuthToken();
exports.authToken = AuthToken.getInstnace();
