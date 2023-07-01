let input=document.getElementById('input')
let text=document.getElementById('text')
input.addEventListener('keyup',(event)=>{
    if(event.getModifierState("CapsLock")){
        text.innerHTML="Capslock is on"
    }else{
        text.innerHTML="CapsLock is off"

    }

})