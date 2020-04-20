const express = require('express')
const userRoutes = require('./User')

class Router {
    constructor() {
        this.router = express.Router()
        this.router.get('/', (req, res) => {
            res.send('Index page')
        })
        this.router.use('/users', userRoutes.router)
    }
}

module.exports = new Router()