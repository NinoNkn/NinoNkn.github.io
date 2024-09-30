// Función para actualizar las barras de habilidades basadas en el progreso de los juegos
function actualizarHabilidades() {
    // Obtener los datos de la tabla
    const filas = document.querySelectorAll("#tablaProgreso tr");

    let progresoEnfoque = 0;
    let progresoCapacidadEspacial = 0;
    let progresoResolucionProblemas = 0;
    let progresoIndependencia = 0;

    // Recorrer las filas de la tabla para actualizar las habilidades
    filas.forEach((fila) => {
        const tipoJuego = fila.cells[1].innerText; // Tipo de juego
        const progreso = fila.cells[2].innerText; // Progreso en porcentaje
        const porcentajeProgreso = parseInt(progreso.replace("%", ""));

        switch (tipoJuego) {
            case 'Orientación':
                progresoEnfoque = porcentajeProgreso;
                break;
            case 'Capacidad espacial':
                progresoCapacidadEspacial = porcentajeProgreso;
                break;
            case 'Resolución de problemas':
                progresoResolucionProblemas = porcentajeProgreso;
                break;
            case 'Independencia':
                progresoIndependencia = porcentajeProgreso;
                break;
        }
    });

    // Actualizar las barras de habilidades
    actualizarBarra("enfoque", progresoEnfoque);
    actualizarBarra("capacidadEspacial", progresoCapacidadEspacial);
    actualizarBarra("resolucionProblemas", progresoResolucionProblemas);
    actualizarBarra("independencia", progresoIndependencia);
}

// Función para actualizar la barra específica
function actualizarBarra(id, porcentaje) {
    const barra = document.getElementById(id);
    const etiqueta = document.getElementById(id + "-label");

    // Cambiar el ancho de la barra según el porcentaje
    barra.style.width = porcentaje + "%";
    etiqueta.innerText = porcentaje + "%";
}

// Llamar a la función para actualizar las habilidades al cargar la página
document.addEventListener("DOMContentLoaded", actualizarHabilidades);
