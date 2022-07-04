"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortId = void 0;
const shortid = require('shortid');
function generateShortId() {
    return shortid.generate();
}
exports.generateShortId = generateShortId;
