
class UserController {
    index (req, res) {
        res.send('Users route')
    }

    store (req, res) {
        console.log(req.body)
        res.send('User store')
    }   
}

module.exports = new UserController