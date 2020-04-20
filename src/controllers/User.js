const { UserModel } =require('../models/index')
const { generateHashedPassword } = require('../utils/Hash')

class UserController {
    async index (req, res) {
        const users = await UserModel.findAll()

        return res.status(200).json(users)
    }

    async store (req, res) {
        try {
            const { name, email, password } = req.body
            
            const user = await UserModel.create({
                name,
                email,
                password: await generateHashedPassword(password)
            })
    
            return res.status(200).json(user)

        } catch (error) {
            console.log(error)
        }
    }   
}

module.exports = new UserController()