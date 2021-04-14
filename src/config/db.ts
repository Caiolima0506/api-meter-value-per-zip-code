import  mongoose from "mongoose";
import { JsonConfig } from "./json.config";

const jsonConfig = new JsonConfig();
class Database {

    private DB_CONNECTION;

    constructor() { } 

    /**
     * Criar a conecxão com o mongo levando em conta a variável de comunicação
     */
    async createConnection() {

        let DB_URI = (await jsonConfig.dbConfig()).DB_URI;

        console.log("Iniciando Conexão com o MongoDb...")

        mongoose.connect(DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).catch((err)=>{
            console.log(err)
            return;
        });

        this.logger(DB_URI);
    }

    logger(uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', () => console.log(`Moogose is connected in ${uri}`));
        this.DB_CONNECTION.on('error', error => console.error.bind(console, `Connection Error: ${error}`));
        this.DB_CONNECTION.on('disconnected', () => console.log(`Moogose is disconnected in ${uri}`));
    }

    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`Mongoose was desconeted by: ${message}`)
            callback();
        });
    }

}

export default Database;