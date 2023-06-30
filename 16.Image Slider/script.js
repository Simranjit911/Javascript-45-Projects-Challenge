// const slides = document.querySelectorAll('.slide')
// let counter = 0
// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`
// })
// const goprev = () => {
//  if(counter!=0){
//     counter--
//     slideimg()
//  }

//     slideimg()
// }
// const gonext = () => {
// if(counter<slides.length-1){
//     counter++
//     slideimg()
// }


//     slideimg()
// }
// const slideimg = () => {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }
let main=document.getElementsByClassName('main')
let img=document.querySelector('img')
let i = 0
let images = []
let time = 10000
let slide = document.querySelector('#slide')
images[0] = "New/pexels-photo-170811.jpeg"
images[1] = "New/pexels-photo-358070.jpeg"
images[2] = 'https://picsum.photos/id/239/1000/500'
images[3] = 'https://picsum.photos/id/232/1000/500'

function changeimg() {
    i++
    if (i >= images.length - 1) {
        i=0
        img.src = images[i]    
    } else {
        img.src = images[i]   
        
    }
    setTimeout("changeimg()",time)
}
window.onload=changeimg()

function next(){
    i++
    if(i>=images.length-1){
        i=0
        img.src=images[i]
    }else{
        img.src=images[i]
    }
}
function prev(){
    i--
    if(i<=0){
        i=images.length-1
        img.src=images[i]
    }else{
        img.src=images[i]
    }
}
