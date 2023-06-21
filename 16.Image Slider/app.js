const slides = document.querySelectorAll('.slide')
let counter = 0
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})
const goprev = () => {
 if(counter!=0){
    counter--
    slideimg()
 }

    slideimg()
}
const gonext = () => {
if(counter<slides.length-1){
    counter++
    slideimg()
}


    slideimg()
}
const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
