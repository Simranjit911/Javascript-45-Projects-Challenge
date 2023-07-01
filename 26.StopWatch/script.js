let ms = 0
let s = 0
let m = 0
let h = 0
let timer = 0
function start() {
    timer = 1
    myfunc()
}
function stopr() {
    timer = 0
    myfunc()
}
function reset() {
    location.reload()
}
function myfunc() {
    if (timer == 1) {
        ms = ms + 1
        if (ms == 100) {
            s = s + 1
            ms = 0
        }
        if (s == 60) {
            m = m + 1
            s = 0
        } if (m == 60) {
            h + h + 1
            m = 0
        }

        let getsec = s
        let getm = m
        let gethr = h
        if (s < 10) {
            getsec = "0" + s

        }
        if (m < 10) {
            getm = "0" + m

        }
        if (h < 10) {
            gethr = "0" + h

        }

        setTimeout("myfunc()", 10)
        document.getElementById("ms").innerHTML = ms;
        document.getElementById("sec").innerText = getsec
        document.getElementById("min").innerText = getm
        document.getElementById("hours").innerText = gethr
    }
}
let loader = document.querySelector('.loader')
function func() {
    loader.classList.add('hide')

}
setInterval(func, 2000)
