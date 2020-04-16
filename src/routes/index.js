import userRouter from './user';

export default (app) => {
  app.route('/').get((req, res) => {
    res.send('Hello World!');
  });

  app.use(userRouter(app));

  return app.route;
};
