// Array de trofeos desbloqueados guardados en localStorage
const unlockedTrophies = JSON.parse(localStorage.getItem("unlockedTrophies")) || [];

// Función para actualizar la visualización de los trofeos en la galería
function updateTrophyDisplay() {
unlockedTrophies.forEach(trophyId => {
    const trophyElement = document.getElementById(trophyId);
    if (trophyElement) {
    trophyElement.classList.remove("locked");
    trophyElement.classList.add("unlocked");
    trophyElement.querySelector("AventuraDiv.jpeg").src = trophyId + "_unlocked.png";
    }
});
}

// Función para desbloquear un trofeo y guardarlo en localStorage
function unlockTrophy(trophyId) {
if (!unlockedTrophies.includes(trophyId)) {
    unlockedTrophies.push(trophyId);
    localStorage.setItem("unlockedTrophies", JSON.stringify(unlockedTrophies));
}
updateTrophyDisplay();
}

// Llama a la función para actualizar la visualización al cargar la página
document.addEventListener("DOMContentLoaded", updateTrophyDisplay);

// Ejemplo de desbloqueo de trofeos para probar
// Desbloquea "Maestro del Laberinto" después de 3 segundos y "Explorador Intrépido" después de 6 segundos

