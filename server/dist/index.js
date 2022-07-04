"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const compression = require('compression');
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors = require('cors');
const CloudFirestore_1 = require("./databases/CloudFirestore");
const users_1 = __importDefault(require("./routes/v1/users"));
CloudFirestore_1.cloudFireStoreManger.init();
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(compression());
app.use((0, helmet_1.default)());
app.use(cors());
app.use(users_1.default);
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
