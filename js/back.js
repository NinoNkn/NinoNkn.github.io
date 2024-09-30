// Definición de los trofeos
const trofeos = [
    { nombre: "Primer paso", descripcion: "Completa tu primera misión.", ganado: false },
    { nombre: "Caminito", descripcion: "Completaste por primera vez los laberintos", ganado: false },
    { nombre: "Responsable", descripcion: "Jugaste el juego de comunicacion", ganado: false },
    { nombre: "Rey Ubicado", descripcion: "Completaste los laberintos en todas sus dificultades", ganado: false },
    { nombre: "Colorizado", descripcion: "Jugaste el juego de colores", ganado: false },
    { nombre: "Un buen niño", descripcion: "Te quedaste 20 minutos jugando en JIVE", ganado: false },
    { nombre: "Estudioso", descripcion: "Completaste por primera vez el juego de matematicas", ganado: false },

];

// Función para mostrar los trofeos en pantalla
function mostrarTrofeos() {
    const trofeosDiv = document.getElementById("trofeos");
    trofeosDiv.innerHTML = "";
    trofeos.forEach(trofeo => {
        const trofeoDiv = document.createElement("div");
        trofeoDiv.className = "trofeo" + (trofeo.ganado ? " ganado" : "");
        trofeoDiv.innerHTML = `<strong>${trofeo.nombre}</strong>: ${trofeo.descripcion}`;
        trofeosDiv.appendChild(trofeoDiv);
    });
}

// Función para mostrar el mensaje de trofeo ganado
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById("mensaje-trofeo");
    mensajeDiv.textContent = mensaje;

    // Para borrar el mensaje después de unos segundos
    setTimeout(() => {
        mensajeDiv.textContent = "";
    }, 3000); // 3 segundos
}

// Función para verificar y desbloquear un trofeo
function ganarTrofeo(nombre) {
    const trofeo = trofeos.find(t => t.nombre === nombre);
    if (trofeo && !trofeo.ganado) {
        trofeo.ganado = true;
        mostrarMensaje(`¡Has ganado el trofeo: ${trofeo.nombre}!`);
        mostrarTrofeos();
    }
}

// Acciones simuladas del juego
function completarMision() {
    ganarTrofeo("Primer paso");
}

function capturarEnemigos() {
    ganarTrofeo("Caminito");
}

function completarJuegoSinMorir() {
    ganarTrofeo("Colorizado");
}

// Mostrar los trofeos al cargar la página
mostrarTrofeos();
