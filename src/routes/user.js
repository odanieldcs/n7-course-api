import UserController from '../controllers/user';
import database from '../database';

export default (app) => {
  const userController = new UserController(database.models.User);

  app.route('/users').get((req, res) => userController.get(req, res));
  app.route('/users').post((req, res) => userController.create(req, res));
  app.route('/users/:id').get((req, res) => userController.getOne(req, res));
  app.route('/users/:id').put((req, res) => userController.update(req, res));
  app.route('/users/:id').delete((req, res) => userController.delete(req, res));

  return app.route;
};
