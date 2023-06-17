const apikey='d54fd4c977cbc6eaf2350839aea99eb3'
const input=document.querySelector('input')
const button=document.querySelector('button')
const icon=document.querySelector('.icon')
const weather=document.querySelector('.weather')
const temp=document.querySelector('.temp')
const des=document.querySelector('.des')

button.addEventListener('click',()=>{
    let  city=input.value
    getweather(city)
})

function getweather(city){
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${'d54fd4c977cbc6eaf2350839aea99eb3'}`)
    .then(response=>response.json())
    .then(data=>console.log(data))
    
}


