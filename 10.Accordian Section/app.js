const acordian=document.getElementsByClassName('accordian')
for(let i=0;i<acordian.length;i++){
    acordian[i].addEventListener('click',fun)
}
let ans=document.getElementsByTagName('p')
function fun(){
    this.classList.toggle('active')
}