const star = document.getElementById('star');
const scoreValue = document.getElementById('score-value');
const gameArea = document.getElementById('game-area');
let score = 0;
let speed = 1000;

function moveStar() {
    const maxX = gameArea.clientWidth - star.clientWidth;
    const maxY = gameArea.clientHeight - star.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    star.style.left = randomX + 'px';
    star.style.top = randomY + 'px';
}

function setDifficulty(level) {
    switch(level) {
        case 'easy':
            speed = 1500;
            break;
        case 'medium':
            speed = 1000;
            break;
        case 'hard':
            speed = 500;
            break;
    }
    resetGame();
}

function resetGame() {
    clearInterval(gameInterval);
    score = 0;
    scoreValue.textContent = score;
    gameInterval = setInterval(moveStar, speed);
}

star.addEventListener('click', () => {
    score++;
    scoreValue.textContent = score;
    moveStar();
});

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

let gameInterval = setInterval(moveStar, speed);

// Espera a que el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');

    // Agrega un evento de clic al botón
    backButton.addEventListener('click', () => {
        window.location.href = '../../index.html'; // Cambia la ruta según sea necesario
    });
});
