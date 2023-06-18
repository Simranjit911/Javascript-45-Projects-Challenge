let menu=document.querySelector('.menu')
let li=document.querySelector('.ul')
li.style.display="none"
function fun(){
    console.log(4)
    if(li.style.display == "none"){
        li.style.display="block"
    }
    else{
        li.style.display="none"
    }
}

menu.addEventListener('click',fun)