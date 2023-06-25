const srchbox=document.querySelector('.searchbox')
const srchbtn=document.querySelector('.searchbtn')
const srch=document.querySelector('.search')
const closebtn=document.querySelector('.closebtn')
srchbtn.addEventListener('click',()=>{
    
    if(srch.classList.contains('active')){
        srchbox.value=' '
    }
    else{
        srch.classList.add('active')
        srchbox.focus()
    }
})
closebtn.addEventListener('click',()=>{
    srch.classList.remove('active')
})