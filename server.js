const express = require("express")
const socketIO = require('socket.io')
const http = require('http')

const app = express()

const server = http.createServer(app)

app.get('/', (req,res) => {
    console.log('Printed')
    res.send('hello world')
})

const io = socketIO(server)

io.on('connection', (socket) => {
    console.log('someone connected')
})

server.listen(5000, () => {
    console.log('Server Available at port 5000')
})
