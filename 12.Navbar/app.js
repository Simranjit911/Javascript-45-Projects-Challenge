const menu=document.querySelector('.menubtn')
const link=document.querySelector('.fst')
menu.addEventListener('click',()=>{
    link.classList.toggle('active')
})