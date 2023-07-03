let input = document.getElementById('input')
let msg = document.getElementById('msg')
let text = document.getElementById('text')
let btn = document.getElementById('btn')

// text is list items
function add() {
    if (input.value == "") {
        msg.style.display = "block"
        msg.innerHTML = "Enter some data"
        msg.style.opacity = "1"

    } else if (input.value.length > 0) {
        msg.style.opacity = "0"
        msg.innerHTML = ""
        msg.style.display = "none"

        let li = document.createElement("li")
        li.innerHTML = input.value
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        text.appendChild(li)
        input.value = ""
        input.focus()
        savedata()
    }
}
text.addEventListener("click", function del(e) {
    if (e.target.tagName == "SPAN") {
        e.target.parentNode.remove();
        savedata()
    }
})

function savedata() {
    localStorage.setItem("data", text.innerHTML)
}
function dspdata() {
    text.innerHTML = localStorage.getItem("data")
}
dspdata()

//On Enter Key Press

input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        btn.click()
    }
    if (event.key === "AltKey") {
        del(e)
    }
})