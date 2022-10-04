const express = require('express')
const cors = require('cors')
const espn  = require('espn-fantasy-football-api/node')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())



const {getPlayers, deletePlayer, updatePlayer, createPlayer}= require('/controller')



app.get('/api/players', getPlayers)
app.delete('/api/players/:id', deletePlayer)
app.post('/api/players', createPlayer)
app.put('/api/players/:id', updatePlayer)

app.use('/', express.static(path.join(__dirname, '.../client/index.html')))
app.use('/', express.static(path.join(__dirname, '.../client/index.css')))
app.use('/', express.static(path.join(__dirname, '.../client/index.js')))
app.use('/', express.static(path.join(__dirname, '.../client/second.html')))
app.use('/', express.static(path.join(__dirname, '.../client/rb.html')))
app.use('/', express.static(path.join(__dirname, '.../client/wr.html')))
app.use('/', express.static(path.join(__dirname, '.../client/qb.html')))
app.use('/', express.static(path.join(__dirname, '.../client/playerArrays.js')))
app.use('/', express.static(path.join(__dirname, '.../server/controller.js')))
app.use('/', express.static(path.join(__dirname, '.../client/index.js')))
app.use(express.static(path.join(__dirname,('.../client'))))


app.listen(port, () => console.log('listening on port ')+ port)