import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const database = {};

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, './models');

  fs.readdirSync(dir).forEach((file) => {
    const modelDir = path.join(dir, file);
    const model = sequelize.import(modelDir);
    database[model.name] = model;
  });

  return database;
};

const connect = () => {
  const sequelize = new Sequelize(
    process.env.DATABASE_DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOSTNAME,
      port: process.env.DATABASE_HOSTPORT,
      dialect: 'mysql',
      logging: console.log,
      define: {
        timestamps: false,
      },
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

  loadModels(sequelize);

  database.sequelize = sequelize;
  database.Sequelize = Sequelize;
};

export default {
  connect,
  models: database,
};
