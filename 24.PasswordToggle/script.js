let pass=document.getElementById('password')
const eye=document.getElementById('eye')
if(pass.value != "  "){
    eye.style.display="block"
}else{
    eye.style.display="none"
}
eye.addEventListener('click',a=()=>{
  

    if(pass.type=="text"){
        pass.type="password"
        eye.classList.add('fa-eye-slash')
        eye.classList.remove('fa-eye')
    }
    else{
        pass.type="text"
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }
})
