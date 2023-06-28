function toggleBtn(x){
    x.classList.toggle("change")
}
let toggle=document.querySelector('.toggleicons')
let links=document.querySelector('.links')

toggle.addEventListener('click',()=>{
links.classList.toggle('hide')
    
})