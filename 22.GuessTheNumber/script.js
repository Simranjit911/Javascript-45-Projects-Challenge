let btn=document.getElementsByTagName('button')[0]
let guess=document.getElementById('guess')
let value=document.getElementById('value')
let randomno=Math.floor(Math.random()*100)
let anouncement=document.getElementById('anouncement')
let cnt=0
btn.addEventListener('click',()=>{
    if(value.value==randomno){
        cnt++
    value.value=' '

        anouncement.innerHTML=`You Guess It Right.Value was ${randomno}`
        guess.innerHTML=cnt
        let q=confirm(`You Guess It Right.Value was ${randomno}.Do You Want to Play Again`)
        if(q==1){
            location.reload()
        }        
    }else if(value.value<randomno){
        anouncement.innerHTML=`You entered ${value.value}.The Value is greater .`
        value.value=' '
        cnt++
        guess.innerText=cnt
    }else{
        anouncement.innerHTML=`You entered ${value.value}.The Value is lesser.`
        value.value=' '
        cnt++
        guess.innerText=cnt
    }
    value.focus()

})