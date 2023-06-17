

const changebg =()=>{
    let rand=Math.floor(Math.random()*16777215)
    let hex='#'+rand.toString(16)
    let body=document.body
    body.style.backgroundColor=hex
}   
document.getElementById('btn').addEventListener('click',changebg)