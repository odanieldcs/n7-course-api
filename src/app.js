import './env';
import './database';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(bodyParser.json());
    this.server.use(helmet());
    this.server.use(morgan('combined'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
