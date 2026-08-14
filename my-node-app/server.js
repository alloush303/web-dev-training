require('dotenv').config()
const http = require('http')
const router = require('./routes/router')

const PORT = process.env.PORT || 3000
const appName = process.env.APP_NAME
const env = process.env.NODE_ENV


const server = http.createServer((req, res) => {
    router(req, res)
    res.end(`server is running in port ${PORT}`)
})

server.listen(PORT, () => {
    console.log(`ENV: ${process.env.NODE_ENV}`)
})