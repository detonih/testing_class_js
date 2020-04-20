const sequelize = require('../models/index')

sequelize
  .synchronization
  .then(() => console.log('Database synced'))
