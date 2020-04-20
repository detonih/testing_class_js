const Database = require('../models/index')

Database
.connection
.sync({  alter: true })
.then(() => {
    console.log('DB synced successfully')
})
.catch(error => {
    console.log('Error while sync db', error)
})