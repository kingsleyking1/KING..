const question=document.querySelector('#question');
const choice=Array.from(document.querySelectorAll('.choice-text'));
const progressText=document.querySelector('#progresstext');
const scoretext=document.querySelector('#score');
const progressBarFull=document.querySelector('#progressBarFull');

let currentQuestion ={}
let acceptingAnswers =true
let score = 0
let questionCounter =0
let availbleQuestions ={}

let Question = [
    {
        question: 'what NAU'
        choice1:'Nnamdi azikiwe'
        choice2:'Nnamdi azikiwe university'
        choice3:'dont know'
        choice4:'unizik'
        answer:2

    }
    {
        question: 'is unizik in awka'
        choice1:'no'
        choice2:'certainly'
        choice3:'maybe'
        choice4:'yes'
        answer:2

    }
    {
        question: 'is unizik a fedral univesity'
        choice1:'yes'
        choice2:'no'
        choice3:'not sure'
        choice4:'nota'
        answer:1

    }

    {
        question: 'where is NAU located'
        choice1:'edo'
        choice2:'anambra'
        choice3:'enugu'
        choice4:'lagos'
        answer:2

    }

]

const SCORE_POINTS =100
const MAX_QUESTIONS =4

startGame=() =>{
    questionCounter =0
    score =0
    availbleQuestions =[...questions]
    getNewQuestions()
}
getNewQuestions=()=>{
    if(availableQestions.lenght===0 || questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/END.HTML')
    }
questionCounter++
progresstext.innerText ='Qestion ${questionCounter}of $ {MAX_QUESTIONS}'
progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS)*100}%'

const questionsIndex=Math.floor(math.random()*availbleQuestions.lenght)
currentQuestion=availbleQuestions[questionIndex]
question.innerText=currentQuestion

choices.forEach(choice=>{
    const number=choice.dataset['choice'+number]

})
availableQestions.splice(questionsIndex, 1)
acceptingAnswers=true
}

choices.forEach(choice=>){
    choice.addEventListener('click'e =>{
        if(!acceptingAnswers) return

        acceptingAnswers =false
        const selectedChoice = e.target
        const selectedAnswers =selectedChoice.dataset ['number']
        let classToApply =selected ==currentQuestion.answer? 'corrrect':
        'incorrect'

        if (classToApply==='correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)


        setTimerOut(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQestions()
        
        },1000)
    


    })
}
incrementScore =num=>{
    score +
}