const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password cannot be null' }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'Password cannot be null' }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password cannot be null' }
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true
    })
    return this
  }
}

module.exports = User