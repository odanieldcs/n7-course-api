import Sequelize, { Model } from 'sequelize';

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        login: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        userProfile: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Users;
