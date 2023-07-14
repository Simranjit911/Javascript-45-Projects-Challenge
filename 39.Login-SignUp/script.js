let signupuser=document.getElementById('supuser')
let signuppass=document.getElementById('suppass')
let loginpass=document.getElementById('luser')
let LoginUser=document.getElementById('loginpass')

function login(){
   let storedname=localStorage.getItem('usr')
   let storedpw=localStorage.getItem('pw')
   if(LoginUser.value==storedname && loginpass.value==storedpw){
   window.location.href="login.html"
   }
   else{
    alert("Wrong Credentials")
   }
}
function signup(){
    localStorage.setItem("usr",signupuser.value)
    localStorage.setItem("pw",signuppass.value)    
    alert('Account Created')
    window.location.href="index.html"
}