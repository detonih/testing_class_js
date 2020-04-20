const yup = require('yup')

class Validator {

    async schemaValidator(req, res, next) {

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required().min(6)
        })
        
        const isSchemaValid = await schema.isValid(req.body) 
        
        if(!isSchemaValid) {
            return res.status(400).json({ message: 'Incorrect data'})
        }

        next()
    }
}

module.exports = new Validator()