function cal(){
    let w=document.getElementById("weight").value
    let h=document.getElementById("height").value
    let res=document.getElementById('res')
    h=parseFloat(h/100)
    h=parseFloat(h*h)
    let ans=w/h
    res.innerHTML=ans.toFixed(2)
        // res.innerHTML=Math.round(ans)
}