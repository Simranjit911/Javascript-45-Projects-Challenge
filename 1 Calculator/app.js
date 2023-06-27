let input=document.getElementById('input')
let btn=document.querySelectorAll('button')

btn.forEach(element =>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.textContent)        
        if(e.target.textContent==='C'){
            input.innerText=' '
        }
        else if(e.target.textContent ==='<'){
            input.innerText=input.innerText.slice(0,-1)
        }
        else if(e.target.textContent==='='){
            input.innerText=eval(input.innerText)
        }
        else{
            input.innerText += e.target.textContent
        }
        input.scrollLeft=input.scrollWidth
    })
})
