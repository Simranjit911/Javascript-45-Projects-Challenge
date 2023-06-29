const pass1 = document.querySelector('#pass1')
const pass2 = document.querySelector('#pass2')
const btn = document.querySelector('.button-29')
let msg = document.getElementById('msg')
let eye = document.getElementById('eye')


eye.addEventListener('click', () => {
    if (eye.classList.contains("fa-eye-slash")) {
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
        pass1.type = "text"
    }
    else {
        pass1.type = "password"
        eye.classList.add("fa-eye-slash")
        eye.classList.remove("fa-eye")
    }
})



btn.addEventListener('click', function my() {
    if (pass1.value == "" || pass2.value == "") {
        msg.style.opacity = 1
        msg.style.backgroundColor = "red"
        msg.innerHTML = 'Enter Credentials'
    

    }
    else if (pass1.value == pass2.value) {
        msg.style.opacity = 1
        msg.style.backgroundColor = "green"
        msg.innerHTML = 'Password matched Login Succesfully'
    }

    else {
        msg.style.opacity = 1
        msg.style.backgroundColor = "red"
        msg.innerHTML = 'Password doesnot matched!'

    }

})

function func() {

    if (pass1.value.length >= 6) {
        pass2.removeAttribute("disabled", '')
        btn.removeAttribute("disabled", '')
    }
    else if (pass1.value == "" && pass2.value != "") {
        pass2.value = ""
    }
    else {
        pass2.setAttribute("disabled", '')
        btn.setAttribute("disabled", '')
    }
}
function func2() {
    if (pass2.value == "") {
        eye.style.display = "none"
    } else {
        eye.style.display = "block"
    }
}
