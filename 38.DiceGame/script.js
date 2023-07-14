let btn = document.querySelector("#roll")
let won = document.querySelector('.won')
let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let arr = ["https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png"
    , "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png"]

function roll() {
    let rand = Math.round(Math.random() * 5)
    let rand2 = Math.round(Math.random() * 5)
    if (rand == rand2) {
        won.innerHTML = "Draw!"
    } else if (rand > rand2) {
        won.innerHTML = "Player 1 Won"
    } else {
        won.innerHTML = "Player 2 Won"
    }
    i1.src = arr[rand]
    i2.src = arr[rand2]
}