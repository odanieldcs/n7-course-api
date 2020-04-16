export default (app) => {
  app.route('/').get((req, res) => {
    res.send('Hello World!');
  });

  return app.route;
};
