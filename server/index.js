const express = require('express')
const app = express()
const server = require('http').createServer(app)
// const io = require('socket.io')(server, {cors: "*"})
var cors = require('cors')
app.use(cors())
const router = express.Router()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

//Import Routes
const studySpotRoute = require('./routes/studySpotRoute')

app.use(router)

//Connect to DB
mongoose.connect(process.env.MONGO_URI || process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db!')
})


//Middleware
app.use(express.json())

app.use('/studyspot', studySpotRoute)

server.listen( process.env.PORT || 3000, () => {
    console.log('Server runing...')
})