const sequelize = require('../models/index')

sequelize
  .connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error)
  })