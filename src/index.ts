import express from 'express';
import * as bodyParser from "body-parser";
import Database from './config/db';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../src/swagger.json'

import { ValueMeterController } from './controllers/ValueMeterController';
import cors from 'cors';

enum ExitStatus {
    Failure = 1,
    Success = 0,
  }

const app: express.Application = express();

const database = new Database();

app.use(bodyParser.json());

/**
 * Iniciar a Conexão com MongoDb
 */
database.createConnection();

app.use(bodyParser.urlencoded({ extended: false }));

const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: allowedOrigins,
  };

app.use(cors(options));

app.use(express.json());

app.use('/swagger', swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use('/PropertyValue', ValueMeterController);

process.on('unhandledRejection', (reason, promise) => {

    throw reason;
});

process.on('uncaughtException', (error) => {
   
    process.exit(ExitStatus.Failure);
});


const port = process.env.PORT || 3001;

export const Server = app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}/`);
});




