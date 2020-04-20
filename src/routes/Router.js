const express = require('express')
const User = require('./User')

class Router {
    constructor() {
        this.router = express.Router()
        this.router.get('/', (req, res) => {
            res.send('Index page')
        })
        this.router.use('/users', User.router)
    }
}

module.exports = new Router()