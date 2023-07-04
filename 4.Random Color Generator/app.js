const getcolor = ()=>{
    let randomno=Math.floor(Math.random()*16777215)
    let hexcode='#'+randomno.toString(16)
    document.body.style.backgroundColor=hexcode
    document.getElementById('btn').style.backgroundColor=hexcode
    document.getElementById('colorcode').textContent=hexcode
    // Copy TO Clipboard
    navigator.clipboard.writeText(hexcode)
}
document.getElementById('btn').addEventListener('click',getcolor)
getcolor()