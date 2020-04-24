import Sequelize from 'sequelize';
import User from './models/user';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
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

    this.connection
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        models.map((model) => model.init(this.connection));
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }
}

export default new Database();
