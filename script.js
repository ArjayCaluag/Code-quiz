// Import variables from Dom, our pointers
let timerEl = document.querySelector('#timer')
let startScreenEl = document.querySelector('#start-screen')
let questionZoneEl = document.querySelector('#question-zone')
let finalZoneEl = document.querySelector('#final-zone')
let questionTitleEl = document.querySelector('#question-title')
let questionChoicesEl = document.querySelector('#question-choices')
let finalScoreEl = document.querySelector('#final-score')
let startButtonEl = document.querySelector('#start-button')

let initialsEl = document.querySelector('#initials')
let highscoreInputEl = document.querySelector('#highscore-text')
let submitButtonEl = document.querySelector('#submit')




let questionIndex = 0;
let timerId;
let timeRemaining = 75;

// Array of Objects containing question, choices, and answers
var questions = [
    {
        question: "What object is round?",
        choices: ["box", "triangle", "square", "circle"],
        answer: "circle"
    },
    {
        question: "What object has three sides?",
        choices: ["box", "triangle", "square", "circle"],
        answer: "triangle"
    },
    {
        question: "Which fruit is red?",
        choices: ["orange", "apple", "grape", "pear"],
        answer: "triangle"
    },
    { 
        question: "What time does class start?",
        choices: ["9AM", "11AM", "1030AM", "10 AM"],
        answer: "10 AM"
    },
    {
        question: "What is the latest iPhone?",
        choices: ["iPhone 10", "iPhone 12", "iPhone 11", "iPhone XS"],
        answer: "iPhone 12"
    },
    {
        question: "What object has four sides?",
        choices: ["pentagon", "triangle", "square", "circle"],
        answer: "square"
    },
]

// Hide question and final ztone on load of site
questionZoneEl.style.display = 'none';
finalZoneEl.style.display = 'none';

//Hide start zone and display question zone on click
// Interval countdown clock is set onclick
function startQuiz() {
    startScreenEl.style.display = 'none';
    questionZoneEl.style.display = 'block';
    timerId = setInterval(clockTick, 1000)
    generateQuestion()
}

// Pushes out question to the questionTitle h1 div
// if whole question array is iterated, end game.
function generateQuestion(){

    if (questionIndex >= questions.length){
        endQuiz()
    }
    let currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.question;
    questionChoicesEl.innerHTML = '';

    // loop through choices array and makes a button for each element in the array
    currentQuestion.choices.forEach(function(value){
    
        let tempbtn = document.createElement('button')
        tempbtn.textContent = value;
        tempbtn.setAttribute('class','button-choice')
        tempbtn.setAttribute('value', value)
        tempbtn.onclick = validateAnswer
        questionChoicesEl.appendChild(tempbtn)

    })
}
// Checks to see if userChoice is not equivalent to the value of correctAnswer. When an incorrect answer is chosen, 10 seconds is removed from timer and generates next question
function validateAnswer(){
    let userChoice = this.value
    let correctAnswer = questions[questionIndex].answer
    if (userChoice !== correctAnswer){
        timeRemaining -=10
    }
    questionIndex++
    generateQuestion();
}
    
// Evaluate countdown timer
// If countdown timer eaches 0, end quiz
function clockTick(){
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if ( timeRemaining == 0){
        endQuiz();
    }

}

// stop timer, hide question and final zone, and append time remaining to final score element when endQuiz is called
function endQuiz(){
    clearInterval(timerId)
    questionZoneEl.style.display = 'none';
    finalZoneEl.style.display = 'block';
    finalScoreEl.append(timeRemaining);

}


startButtonEl.onclick= startQuiz

