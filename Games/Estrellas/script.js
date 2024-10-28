const star = document.getElementById('star');
const scoreValue = document.getElementById('score-value');
const timerValue = document.getElementById('timer-value');
const timerDisplay = document.getElementById('timer');
const gameArea = document.getElementById('game-area');
let score = 0;
let speed = 1000;
let timer;
let elapsedTime = 0;
let gameStarted = false;
let gameInterval;
let scoreTarget = 20;

function moveStar() {
    const maxX = gameArea.clientWidth - star.clientWidth;
    const maxY = gameArea.clientHeight - star.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    star.style.left = randomX + 'px';
    star.style.top = randomY + 'px';
}

function setDifficulty(level) {
    stopGame();
    score = 0;
    scoreValue.textContent = score;
    elapsedTime = 0;
    timerValue.textContent = elapsedTime;
    
    switch(level) {
        case 'easy':
            speed = 1500;
            scoreTarget = 20;
            break;
        case 'medium':
            speed = 1000;
            scoreTarget = 15;
            break;
        case 'hard':
            speed = 500;
            scoreTarget = 10;
            break;
    }
    
    star.style.left = '0px';
    star.style.top = '0px';
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(timer);
    gameStarted = false;
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
        gameInterval = setInterval(moveStar, speed);
        timerDisplay.style.display = "block";
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        elapsedTime++;
        timerValue.textContent = elapsedTime;
    }, 1000);
}

function displayVictoryMess() {
    let message = '';
    if (scoreTarget === 10) {
        message = "¡Has completado el nivel difícil! Puedes cambiar de juego.";
    } else if (scoreTarget === 15) {
        message = "¡Has completado el nivel medio! Puedes continuar al nivel difícil.";
    } else {
        message = "¡Has completado el nivel fácil! Puedes continuar al nivel medio o difícil.";
    }
    
    document.getElementById("moves").innerHTML = `${message}<br>Tiempo: ${elapsedTime} segundos`;
    toggleVisablity("Message-Container");
}

function toggleVisablity(id) {
    if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
        resetGame();
    } else {
        document.getElementById(id).style.visibility = "visible";
    }
}

function resetGame() {
    stopGame();
    score = 0;
    scoreValue.textContent = score;
    elapsedTime = 0;
    timerValue.textContent = elapsedTime;
    star.style.left = '0px';
    star.style.top = '0px';
}

star.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    }
    score++;
    scoreValue.textContent = score;
    checkWin();
});

function checkWin() {
    if (score >= scoreTarget) {
        stopGame();
        displayVictoryMess();
        timerDisplay.style.display = "block";
    }
}

function toggleDropdown() {
    document.getElementById("difficultyDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Inicializar el juego en modo fácil
setDifficulty('easy');