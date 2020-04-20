const express = require('express')
const { router } = require('./routes/Router')

class App {
    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(router)
    }
}

module.exports = new App()