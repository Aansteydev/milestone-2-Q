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
        question: "What was the name of Sega's first games console?",
        choices: ["The SG-1000", "The Master System", "The MegaDrive", "Sega Saturn"],
        correct: 0
    },
    {
        question: "British games devs Rare had a hit on their hands with Goldeneye for the N64 but what year did they first begin to create games? ",
        choices: ["1980", "1984", "1985", "1982"],
        correct: 2
    },
    {
        question: "Nintendo broke into the market with the Famicom in 1983 but what was the name of the add on for that system?", ",
        choices: ["The Gameboy", "Disk System", "The Famicom Twin", "64DD"],
        correct: 1
    },
    {
        question: "The Castlevania series is one of Konami's best series of games but what is the name of the protagonist from the first title?",
        choices: ["Trevor Belmont", "Alucard", "Sypha Belnades", "Simon Belmont"],
        correct: 3
    },
    {
        question: "Capcom are well known for their games such as Resident Evil and Street Fighter but what is Capcom and abbreviation of",
        choices: ["Capsule Company", "Capsule Computer", "Capsule Corp", "Capsule Community"],
        correct: 0
    },
    {
        question: "The Resident Evil series has had a few spin offs over the years but what is the title of the only Gameboy Colour game that was created in the series?",
        choices: ["Resident Evil 2", "Resident Evil Gaiden", "Resident Evil Deadly Silence", "Resident Evil Portable"],
        correct: 1
    },
    {
        question: "Which manga artist has famously created art for the Dragon Quest series of games? ",
        choices: ["Akira Toriyama", "Katsuhiro Otomo", "Naoki Urasawa", "Rumiko Takahashi"],
        correct: 0
    },
    {
        question: "In what game did Sonic the Hedgehog have his first debut?",
        choices: ["Sonic The Hedgehog", "Rad Racer", "Rad Mobile", "Fighting Vipers"],
        correct: 2
    },
    {
        question: "Nintendo were founded in 1889 in Kyoto, Japan what were they famous for making at the time?",
        choices: ["Pachislot", "Playing Cards ", " Alcohol", "Household goods"],
        correct: 1
    },
    {
        question: " In what year did Wario, Marios nemesis make his debut?",
        choices: ["1992", "1985", "1993", "1983"],
        correct: 0
    },
    {
        question: "Sega had a hit on it's hands with 'Nights into Dreams' for the Sega Saturn but who produced the game?",
        choices: ["Reiko Kodama", "Yu Suzuki", "Yuji Saito", "Yuji Naka"],
        correct: 1
    },
    {
        question: "Final Fantasy 7(1997) featured a summon that took ages to finish their attack due to the amount of attackers, what is their name?",
        choices: ["Neo Bahamut", "Odin", "Ifrit", "Knights Of The Round"],
        correct: 3
    },
    {
        question: "Pikmin was a hit on the Nintendo Gamecube but what type of game is it?",
        choices: ["Platformer", "Beat 'em up", "Real Time Strategy", "Fishing simulator"],
        correct: 2
    },
    {
        question: "Every game in the Final Fantasy series contains a character with which name?",
        choices: ["Locke", "Cid", "Garland", "Kefka"],
        correct: 1
    },
    {
        question: "Captain Falcon first appeared in which game series?",
        choices: ["Earthbound", "Pilot Wings", "F-Zero", "Star Fox"],
        correct: 2
    },
    {
        question: "Earthbound is a classic in the JRPG genre but what is the series creators name?",
        choices: ["Shigeru Miyamoto", "Shigesato Itoi", "Hironobu Sakaguchi", "Yu Suzuki"],
        correct: 1
    },
    {
        question: "Donkey Kong JR is a spin off of the arcade classic which had it's own spin off which taught...?",
        choices: ["English", "Science", "Maths", "Geography"],
        correct: 2
    },
    {
        question: "What is the name of the eco-terrorist group that Cloud joins in Final Fantasy 7 ? ",
        choices: ["COLLAPSE", "SOLDIER", "SHINRA", "AVALANCHE"],
        correct: 3
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