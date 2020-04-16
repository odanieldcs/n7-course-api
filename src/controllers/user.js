class UserController {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const users = await this.User.findAll();
      res.send(users);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await this.User.findOne({
        where: { id },
      });
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    try {
      const users = await this.User.create(req.body);
      res.status(201).json({
        users,
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await this.User.update(req.body, {
        where: { id },
      });

      if (updated) {
        const updatedPost = await this.User.findOne({ where: { id } });
        res.status(200).json({ post: updatedPost });
      }

      throw new Error('User not found');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.User.destroy({
        where: { id },
      });

      if (deleted) {
        res.status(204).send('User deleted');
      }

      throw new Error('User not found');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default UserController;
