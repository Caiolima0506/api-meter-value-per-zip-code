import express from 'express';
import * as bodyParser from "body-parser";
import Database from './config/db';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../src/swagger.json'

import { ValueMeterController } from './controllers/ValueMeterController';

const app: express.Application = express();

const database = new Database();

let server;

app.use(bodyParser.json());

/**
 * Iniciar a Conexão com MongoDb
 */
database.createConnection();

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rotas para Controllers
 */
app.use('/swagger', swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use('/valorImmobile', ValueMeterController);


const port = process.env.PORT || 3002;

export const Server = app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}/`);
});




