const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const{
    getPlayers
} = require('./controller')

app.get('/getPlayers', getPlayers)







app.listen(7000, () => console.log('listening on port 7000'))