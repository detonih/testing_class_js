const { app } = require('../App')

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})