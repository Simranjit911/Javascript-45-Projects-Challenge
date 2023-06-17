const lengthslider=document.querySelector('.passlength input')
lengthslider.addEventListener('input',updateslider=()=>{
document.querySelector('.num').innerHTML=lengthslider.value
})