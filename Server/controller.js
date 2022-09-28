let players = require('./db.json')
let globalID = 4

module.exports = {

    getPlayers:(req,res)=>{
        res.status(200).send(players)
    },
    
    deletePlayer:(req,res)=>{
        let index = players.findIndex(elem=> elem.id === +req.params.id)
        players.splice(index,1)
        res.status(200).send(players)
    },
    createPlayer:(req,res)=>{
        const {name, position} = req.body
        let newPlayer = {
            name,
            position,
            votes: 0,
            id: globalID
        }
        console.log(newPlayer)
        players.push(newPlayer)
        globalID++
        res.status(200).send(players)
    },
    updatePlayer:(req,res)=>{
        const{type}=req.body
        let index = players.findIndex(elem=> elem.id === +req.params.id)
        if (type === 'minus' && players[index].votes >0){
            players[index].votes -=1
            res.status(200).send(players)
        }else if (type==='plus'){
            players[index].votes +=1
            res.status(200).send(players)
        }else{
            res.status(400).send('Invalid score')
        }
    
    }
    


}