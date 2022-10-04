const express = require('express')
const cors = require('cors')
const espn  = require('espn-fantasy-football-api/node')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())



const {getPlayers, deletePlayer, updatePlayer, createPlayer}= require('./controller')



app.get('/api/players', getPlayers)
app.delete('/api/players/:id', deletePlayer)
app.post('/api/players', createPlayer)
app.put('/api/players/:id', updatePlayer)




app.listen(port, () => console.log('listening on port ')+ port)