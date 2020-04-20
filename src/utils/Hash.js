const bcrypt = require('bcrypt')

class Hash {

    async generateHashedPassword  (password) {
        try {
          const hash = await bcrypt.hash(password, 8)
    
          return hash
        } catch (error) {
          return error
        }
      }
    
      async compareHash  (password, hash) {
        const comparedHash = await bcrypt.compare(password, hash)
        return comparedHash
      }
}

module.exports = new Hash