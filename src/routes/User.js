const express = require('express')
const { index ,store } = require('../controllers/User')

class User {
    constructor() {
        this.router = express.Router()
        this.router.get('/', index)
        this.router.post('/', store)
    }    
}

module.exports = new User()