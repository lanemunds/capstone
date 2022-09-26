const players = require('./db.json')

module.exports ={

    getPlayers: (req,res)=>{
res.status(200).send(players)
    }
    

}