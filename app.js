const express = require("express")
const config = require("config")
const path = require("path")

const app = express()

app.use('/api/user', require('./routes/user.routes'))

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = config.get("port") || 5000

app.listen(PORT, () => {console.log('Server has been started...')})