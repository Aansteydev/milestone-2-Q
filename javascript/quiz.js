const questions = [
    {
        question: "When was the first Super Mario Brothers game released?",
        choices: ["1983", "1985", "1988", "1980"],
        correct: 0
    },

    {
        question: "How many games are in the original Megaman series?",
        choices: ["12", "11", "10", "9"],
        correct: 1
    },
    {
        question: "Which games company is well known for creating the Dark Souls and Armoured Core series of games?",
        choices: ["Konami", "Capcom", "Nintendo", "From Software"],
        correct: 3
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: 0
    },

];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
        }
    }, 2000);
}

showQuestion();