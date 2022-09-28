






const baseURL = 'http://localhost:5020/api/players'
const form = document.querySelector('form')

const playersCallback = ({data :players})=>displayPlayers(players)
const errCallback = err => console.log(err)

const getAllPlayers = () => axios.get(baseURL).then(playersCallback).catch(errCallback)

const createPlayer = body=>axios.post(baseURL,body).then(playersCallback).catch(errCallback)

const deletePlayer = id => axios.delete(`${baseURL}/${id}`).then(playersCallback).catch(errCallback)
const updatePlayer = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(playersCallback).catch(errCallback)


    function submitHandler(e){
        e.preventDefault()
        let name = document.querySelector('#name')
        let position = document.querySelector('#position')
        let votes = document.querySelector('#votes')

        let bodyObj = {
            name : name.value ,
            position : position.value,
            votes: votes.value
        }
        createPlayer(bodyObj)
        name.value = ''
        position.value =''
        votes.value = ''


    }

    function createPlayerCard(player){
        const playerCard = document.createElement('div')
        playerCard.classList.add('player-card')

        playerCard.innerHTML = `
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



function randomPlayer(event){
    event.preventDefault()
    alert('Random Player')
}

const random = document.querySelector('#hailMary')
random.addEventListener('click',randomPlayer)