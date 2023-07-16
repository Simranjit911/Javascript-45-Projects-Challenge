const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let sscorr=document.querySelector(".score")
let cqn = 0
let score = 0
let scor=document.getElementById("score")
let total=document.getElementById("total")
const ques = document.getElementById("ques")
const a = document.getElementById("a_text")
const b = document.getElementById("b_text")
const c = document.getElementById("c_text")
const d = document.getElementById("d_text")
const ans = document.querySelectorAll(".answer")
const btn = document.getElementById("btn")
const body=document.querySelector(".qa_body")
setTimeout(load,2000)
function load() {
    deselect()
    ques.innerHTML = quizData[cqn].question
    a.innerHTML = quizData[cqn].a
    b.innerHTML = quizData[cqn].b
    c.innerHTML = quizData[cqn].c
    d.innerHTML = quizData[cqn].d
}
function deselect() {
    ans.forEach(ans => ans.checked = false)
}
function selected() {
    let answer
    ans.forEach(ans => {
        if (ans.checked) {
            answer = ans.id
        }
    })
    return answer
}
let num=1
btn.addEventListener("click", () => {
    let answer = selected()
    if (answer) {
        if (answer === quizData[cqn].correct) {
            score++
        }       
       
        cqn++
        
        if (cqn < quizData.length) {
            load()
        } else {
            sscorr.style.display="block"
            body.style.display="none"
            btn.textContent="Restart"
            scor.innerHTML=score
            total.innerHTML=quizData.length
            btn.addEventListener("click",()=>{
                window.location.reload()
                num=0
            })
        }
    }
    if(num<quizData.length){
        num++
    }
    let no = document.getElementById("no").innerHTML = num
})
