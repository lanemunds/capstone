
const baseURL = 'https://fantasy-football-scapegoat.herokuapp.com//api/players'
const form = document.querySelector('form')


const playersCallback = ({data :players})=>displayPlayers(players)
const errCallback = err => console.log(err)

const getAllPlayers = () => axios.get(baseURL).then(playersCallback).catch(errCallback)

const createPlayer = body=>axios.post(baseURL,body).then(playersCallback).catch(errCallback)

const deletePlayer = id => axios.delete(`${baseURL}/${id}`).then(playersCallback).catch(errCallback)
const updatePlayer = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(playersCallback).catch(errCallback)
const randomPlayer = () => axios.get(`${baseURL}`).catch(errCallback)

    function submitHandler(e){
        e.preventDefault()
        let name = document.querySelector('#name')
        let position = document.querySelector('#position')
        let imageURL = document.querySelector('#imageURL')

        let bodyObj = {
            name : name.value ,
            position : position.value,
            imageURL: imageURL.value
        }
        createPlayer(bodyObj)
        name.value = ''
        position.value =''
        imageURL.value = ''


    }

    function createPlayerCard(player){
        const playerCard = document.createElement('div')
        playerCard.classList.add('player-card')

        playerCard.innerHTML = `<img alt = 'Player Photo' src = ${player.imageURL} class = 'playerimg'/>
        <p class="name">${player.name}</p>
        <p class="name">${player.position}</p>
        <div class = 'btns-container'>
            <button onclick = "updatePlayer(${player.id}, 'minus')">-</button>
            <p class="votes">${player.votes}</p>
            <button onclick = "updatePlayer(${player.id}, 'plus')">+</button>
        </div>
        <button onclick= "deletePlayer(${player.id})">delete</button>
        `

        playersContainer.appendChild(playerCard)
    }

    function displayPlayers(arr){
        playersContainer.innerHTML = ``
        for(let i = 0; i <arr.length; i++){
            createPlayerCard(arr[i])
        }
    }
    form.addEventListener('submit', submitHandler)
    
    
    getAllPlayers()



   
    






    function giveRandomQB(event){
    event.preventDefault()
    let qbArr = [14876, 2330, 2573079, 4040715, 4361259, 3917792, 2969939, 3918298,3916387,3917315,2576980,3052587,4362887,3915511,14881 ]
    
    let qrid = qbArr[Math.floor(Math.random() * qbArr.length)]
    
axios
    .get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${qrid}`)
    .then((response)=>{
        console.log(response.data)
        let ranPlayer = response.data.athlete.displayName+' '
        +response.data.athlete.position.abbreviation+' '
        +response.data.athlete.team.displayName
        
        
        let style = document.createElement('li')
        style.innerHTML = ranPlayer
        let randTeam = document.querySelector('#randQbBox')
        randTeam.appendChild(style)
        alert(ranPlayer)
    })
}


function giveRandomWR(event){
    event.preventDefault()
    let wrArr = [4361370,2976316,3116406, 4372016,4241463,3128429,4241372,4360939,4243537,2976212,3915416,4362628,4239993,4241389,4374302,4361432,3128390,16731,4035687,16800,15818,3045138,2977187]
    
    let wrid = wrArr[Math.floor(Math.random() * wrArr.length)]
    
axios
    .get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${wrid}`)
    .then((response)=>{
        console.log(response.data)
        let ranPlayer = response.data.athlete.displayName+' '
        +response.data.athlete.position.abbreviation+' '
        +response.data.athlete.team.displayName
        
        let style = document.createElement('li')
        style.innerHTML = ranPlayer
        let randTeam = document.querySelector('#randWrBox')
        randTeam.appendChild(style)
        alert(ranPlayer)
    })
}


function giveRandomRB(event){
    event.preventDefault()
    let rbArr = [3119195,3116593,3925347,4240021,3068267,3929630,4427366,4045163,4241457,3122976,3139925,3115364,3043078,4360294,3054850,4047365,4242214,4052042,4239996,4242335,4360238]
    
    let rbid = rbArr[Math.floor(Math.random() * rbArr.length)]
    
axios
    .get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${rbid}`)
    .then((response)=>{
        console.log(response.data)
        let ranPlayer = response.data.athlete.displayName+' '
        +response.data.athlete.position.abbreviation+' '
        +response.data.athlete.team.displayName
        
        let style = document.createElement('li')
        style.innerHTML = ranPlayer
        let randTeam = document.querySelector('#randRbBox')
        randTeam.appendChild(style)
        alert(ranPlayer)
    })
}



const randomqb = document.querySelector('#hailMaryQB')
randomqb.addEventListener('click',giveRandomQB)
const randomwr = document.querySelector('#hailMaryWR')
randomwr.addEventListener('click',giveRandomWR)
const randomrb = document.querySelector('#hailMaryRB')
randomrb.addEventListener('click',giveRandomRB)
