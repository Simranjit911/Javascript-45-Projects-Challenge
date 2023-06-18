let ham=document.querySelector('.ham')
let nav=document.querySelector('.links2')
ham.addEventListener('click',fun)


nav.style.display="none"
function fun(){
    if(nav.style.display=="none"){
        nav.style.display="block"
    }
    else{
        nav.style.display="none"
    }    
}
