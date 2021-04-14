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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const json_config_1 = require("./json.config");
const jsonConfig = new json_config_1.JsonConfig();
class Database {
    constructor() { }
    /**
     * Criar a conecxão com o mongo levando em conta a variável de comunicação
     */
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            let DB_URI = (yield jsonConfig.dbConfig()).DB_URI;
            console.log("Iniciando Conexão com o MongoDb...");
            mongoose_1.default.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
                console.log(err);
                return;
            });
            this.logger(DB_URI);
        });
    }
    logger(uri) {
        this.DB_CONNECTION = mongoose_1.default.connection;
        this.DB_CONNECTION.on('connected', () => console.log(`Moogose is connected in ${uri}`));
        this.DB_CONNECTION.on('error', error => console.error.bind(console, `Connection Error: ${error}`));
        this.DB_CONNECTION.on('disconnected', () => console.log(`Moogose is disconnected in ${uri}`));
    }
    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`Mongoose was desconeted by: ${message}`);
            callback();
        });
    }
}
exports.default = Database;
