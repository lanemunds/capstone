let qbArr = [14876, 2577417 , 3046779 ]
const random = (event)=>{
    event.preventDefault()
let qrid = Math.floor(Math.random() * qbArr.length)
return qrid
}
