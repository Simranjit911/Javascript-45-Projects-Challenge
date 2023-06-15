const btn=document.getElementById('btn')
const output=document.querySelectorAll('h1')[1]
let quote=['If you want to know what God thinks of money, just look at the people he gave it to.','The average Ph.D. thesis is nothing but a transference of bones from one graveyard to another.','There is absolutely no inevitability as long as there is a willingness to contemplate what is happening.','Beware of the man who won\'t be bothered with details','reedom is just Chaos, with better lighting.']
btn.addEventListener('click',()=>{
    let rand=Math.floor(Math.random()*quote.length)
    output.textContent=quote[rand]
})