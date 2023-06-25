const instacounter=document.querySelector('.instacounter')
const ytcounter=document.querySelector('.ytcounter')
const twittercounter=document.querySelector('.twittercounter')
let times=0
let id=setInterval(() => {
    instacounter.textContent=times*3000
    ytcounter.textContent=times*9000
    twittercounter.textContent=times*8000
    times++
    if(times==101){
        clearInterval(id)
    }
}, 30);