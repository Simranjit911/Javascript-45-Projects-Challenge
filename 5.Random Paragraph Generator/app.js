// let arr = ['Bruce Lee once said, "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." This quote highlights the importance of mastering the fundamentals and honing one\'s skills through relentless practice.'
//     , 'Jack Ma, the founder of Alibaba, shared his wisdom by stating, "Opportunities lie in the place where the complaints are." This quote encourages individuals to see challenges as opportunities for innovation and problem-solving, emphasizing the importance of a positive mindset.'
//     , 'Bruce Lee believed in continuous self-improvement, saying, "The key to immortality is first living a life worth remembering." This quote inspires us to strive for greatness and leave a lasting impact by constantly pushing ourselves to grow and achieve.',
//     'Jack Ma shared his thoughts on the importance of having a clear vision, stating, "You need the right people with you, not the best people." This quote emphasizes the significance of aligning with individuals who share your values and vision, rather than solely focusing on individual talents.', 'Albert Einstein once said, "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."', 'Ralph Waldo Emerson believed in the power of individuality, stating, "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." This quote encourages authenticity and resisting societal pressures.',
//     'Lao Tzu expressed the value of simplicity with his quote, "Simplicity, patience, and compassion are the greatest treasures in life." These words remind us to embrace simplicity, practice patience, and cultivate compassion in our interactions with others.'
//     , 'Aristotle emphasized the significance of character, stating, "We are what we repeatedly do. Excellence, then, is not an act but a habit." This quote highlights the importance of cultivating positive habits and consistently striving for excellence.']

let input=document.getElementById('noofwords')
let words
const container=document.querySelector('.container')
const generateWords = (words)=>{
    let text=""
    const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let i=0;i<words;i++){
        let random=(Math.random()*(25)).toFixed(0)
        text += letters[random]
    }
    return text
}

const getdata = () =>{
    words=Number(input.value)
    const para=document.createElement('p')
    let data=''
    for(let i=0;i<words;++i){
        const rand=(Math.random()*15).toFixed(0)
        data += generateWords(rand)
        data += " "
        
    }
    para.innerText=data
    para.setAttribute('class','paras')
    container.append(para)
}
