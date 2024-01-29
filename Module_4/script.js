const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<js> ", "<javascript>", "<script>"],
        answer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js ?",
        choices: ["<script href= xxx.js>", "<script name= xxx.js>", "<script src= xxx.js>"],
        answer: "<script src= xxx.js>"
    }
];

const startButton = document.getElementById("start-button");
const quizScreen = document.getElementById("quiz-screen");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const initialsEl = document.getElementById("initials");

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
    startTimer();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            if (choice === question.answer) {
                resultEl.textContent = "Correct!";
                score++;
            } else {
                resultEl.textContent = "Wrong!";
                timeLeft -= 10;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        });
        choicesEl.appendChild(button);
    });
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    quizScreen.classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    scoreEl.textContent = score;
}

document.getElementById("quiz-screen").classList.add("hidden");
startButton.addEventListener("click", startQuiz);