const express = require('express')
const cors = require('cors')
const espn  = require('espn-fantasy-football-api/node')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
const path = require('path')


const {getPlayers, deletePlayer, updatePlayer, createPlayer}= require('./controller.js')



app.get('/api/players', getPlayers)
app.delete('/api/players/:id', deletePlayer)
app.post('/api/players', createPlayer)
app.put('/api/players/:id', updatePlayer)
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
} )
app.use(express.static(path.join(__dirname, '../client')))




app.listen(port, () => console.log(`listening on port ${port}`))