const express = require('express')
const { router } = require('./routes/Router')
const bodyParser = require('body-parser')

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }
    
    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())    
    }

    routes() {
        this.app.use(router)
    }
    
}

module.exports = new App()