const btn = document.getElementById('btn')
const output = document.querySelectorAll('h1')[0]
const joke = document.querySelectorAll('.joke')[0]

function generate() {
    const ajax = new XMLHttpRequest
    const url = "https://api.chucknorris.io/jokes/random"
    ajax.open('GET', url, true)
    ajax.onreadystatechange = function () {
        if(this.status==200 && this.readyState === 4){
            console.log(this.responseText)
            let data=JSON.parse(this.responseText)
            joke.innerHTML=`${data.value}`
        }
    }
    ajax.send()
}
