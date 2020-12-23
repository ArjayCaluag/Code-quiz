// Import variables from Dom, our pointers
let timerEl = document.querySelector("#timer")
let startScreenEl = document.querySelector("#start-screen")
let questionZoneEl = document.querySelector("#question-zone")
let finalZoneEl = document.querySelector("#final-zone")
let questionquestionEl = document.querySelector("#question-question")
let questionChoicesEl = document.querySelector("#question-choices")
let finalScoreEl = document.querySelector("#final-score")
let initialsEl = document.querySelector("#initials")

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