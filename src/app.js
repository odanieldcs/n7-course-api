import './env';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import database from './database';

const prepare = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(morgan('combined'));
  app.use(helmet());

  app.database = database;
  await app.database.connect();

  app.use('/', routes(app));

  return app;
};

export default async () => {
  const app = prepare();

  return app;
};
