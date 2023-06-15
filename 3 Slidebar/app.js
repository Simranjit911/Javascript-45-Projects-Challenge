const threedots= document.querySelector('.threedots')  
const container=document.querySelector('.container')
const cut=document.querySelector('.cut')

threedots.addEventListener('click',()=>{
    container.style.width='50vw'
})
cut.addEventListener('click',()=>{
    container.style.width='0'
})