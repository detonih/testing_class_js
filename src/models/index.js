const Sequelize = require('sequelize')
const User = require('./User')
const config = require('../configs/database')

// const models = [User];
// console.log(User)

class Database {
    constructor () {
        this.init()
    }

    init() {
        this.connection = new Sequelize(config)
        this.UserModel = User.init(this.connection)  
    }
}

module.exports = new Database()
