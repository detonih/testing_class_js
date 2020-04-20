const express = require('express')
const { index ,store } = require('../controllers/User')
const { schemaValidator } = require('../middlewares/Validator')

class User {
    constructor() {
        this.router = express.Router()
        this.router.get('/', index)
        this.router.post('/', schemaValidator, store)
    }    
}

module.exports = new User()