const questions = [
    {
        question: "What does CSS stand for?",
        choices: ["Coordinated Selective Styles", "Cascading Style Sheets", "Challenging Style Software", "Control System Shutdown"],
        correctAnswer: 1
    },
    {
        question: "Which tag will provide the largest size to a header?",
        choices: ["<h1>", "<h3>", "<h4>", "<h6>"],
        correctAnswer: 0
    },
    {
        question: "An error(s) in code that impacts the way a program runs is refferred to as a ____",
        choices: ["Splat", "Rat", "Bug", "Slug"],
        correctAnswer: 2
    },
    {
        question: "What does MERN stand for in coding?",
        choices: ["Mangos, Eggplant, Raspberry, Nectarines", "MongoDB, Express, React, Node.js", "Monkey's eat raw noodles", "Modifiable Existential Raccoon Network"],
        correctAnswer: 1
    },
    {
        question: "Which of the following about HTML semantic tags is true?",
        choices: ["Your code will break without the use of semantic tags", "Improper semantic tag use will result in your mom unfriending you on facebook", "There is no benefit to using semantic tags", "Semantic tags allow screen readers to better communicate your content to blind/visually impaired users"],
        correctAnswer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let timeRemaining = 90;
let timerElement = document.getElementById("time-remaining");
let timer;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = questions[currentQuestion].choices[i];
        li.addEventListener("click", handleAnswer);
        choicesElement.appendChild(li);
    }
}

function handleAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.textContent;
    const correctAnswer = questions[currentQuestion].choices[questions[currentQuestion].correctAnswer];

    if (selectedAnswer === correctAnswer) {
        score += 20;
    } else {
        timeRemaining -= 10;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerElement.textContent = timeRemaining;
        } else {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);

    const quizContainer = document.getElementById("quiz-container");
    const scoreElement = document.getElementById("score");
    const timeElement = document.getElementById("time");
    const leaderboard = document.getElementById("leaderboard");
    const scoresElement = document.getElementById("scores");
    const startOverBtn = document.getElementById("start-over-btn");

    quizContainer.style.display = "none";

    scoreElement.textContent = `Score: ${score}`;
    timeElement.textContent = `Time Remaining: ${timeRemaining} seconds`;

    const username = prompt("Enter your username");
    const scoreData = { username: username, score: score, timeRemaining: timeRemaining };
    const previousScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    previousScores.push(scoreData);
    localStorage.setItem("quizScores", JSON.stringify(previousScores));

    const sortedScores = previousScores.sort((a, b) => {
        if (a.score === b.score) {
            return b.timeRemaining - a.timeRemaining;
        }
        return b.score - a.score;
    });

    scoresElement.innerHTML = sortedScores
        .map((scoreData, index) => `<li>Rank ${index + 1}: ${scoreData.username} - ${scoreData.score} points (${scoreData.timeRemaining} seconds remaining)</li>`)
        .join("");

    leaderboard.style.display = "block";
    startOverBtn.style.display = "block";

    startOverBtn.addEventListener('click', () => {
        resetQuiz();
        displayQuestion();
        startTimer();
    });
}

function highlightAnswer(event) {
    event.target.classList.add("active");
}

function removeHighlightAnswer(event) {
    event.target.classList.remove("active");
}

function resetQuiz() {
    clearInterval(timer);
    currentQuestion = 0;
    score = 0;
    timeRemaining = 90;
    timerElement.textContent = timeRemaining;
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}

function stopQuiz() {
    clearInterval(timer);
    const quizContainer = document.getElementById("quiz-container");
    const scoreElement = document.getElementById("score");
    const timeElement = document.getElementById("time");
    const leaderboard = document.getElementById("leaderboard");
    const scoresElement = document.getElementById("scores");
    const startOverBtn = document.getElementById("start-over-btn");

    quizContainer.style.display = "none";

    scoreElement.textContent = `Score: ${score}`;
    timeElement.textContent = `Time Remaining: ${timeRemaining} seconds`;

    leaderboard.style.display = "block";
    startOverBtn.style.display = "block";

    const previousScores = JSON.parse(localStorage.getItem("quizScores")) || [];

    const sortedScores = previousScores.sort((a, b) => {
        if (a.score === b.score) {
            return b.timeRemaining - a.timeRemaining;
        }
        return b.score - a.score;
    });

    scoresElement.innerHTML = sortedScores
        .map((scoreData, index) => `<li>Rank ${index + 1}: ${scoreData.username} - ${scoreData.score} points (${scoreData.timeRemaining} seconds)</li>`)
        .join("");

}

displayQuestion();
startTimer();

document.getElementById('leaderboard-btn').addEventListener('click', stopQuiz);