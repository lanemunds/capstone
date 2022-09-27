const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



const {getPlayers, deletePlayer, updatePlayer, createPlayer}= require('./controller')

app.get('/api/players', getPlayers)
app.delete('/api/players/:id', deletePlayer)
app.post('/api/players', createPlayer)
app.put('/api/players/:id', updatePlayer)




app.listen(5020, () => console.log('listening on port 5020'))