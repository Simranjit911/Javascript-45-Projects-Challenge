let no=document.querySelector('.number')
let increase=document.getElementById('increase')
let decrease=document.getElementById('decrease')
let reset=document.getElementById('reset')
let cnt=0


increase.addEventListener('click',()=>{
    cnt++
    no.innerHTML=cnt 
    if(cnt>=0){
        no.style.color='green'
    }

})
decrease.addEventListener('click',()=>{
    if(cnt<=0){
        no.style.color='red'
    }
    cnt--
    no.innerHTML=cnt
   
})
reset.addEventListener('click',()=>{  
    if(cnt==0){
        no.style.color='black'
    }
    cnt=0
    no.innerHTML=cnt
})
