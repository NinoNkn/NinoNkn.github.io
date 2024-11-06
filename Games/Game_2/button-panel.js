class ButtonPanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
    /* General */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    /* Panel Container */
    .panel-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
        margin: 0;
        width: 100%;
    }

    .button-panel {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        width: 90%;
        max-width: 300px;
    }

    /* Título del menú */
    .menu-title {
        color: #488aec;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
        text-transform: uppercase;
        padding-bottom: 10px;
        border-bottom: 2px solid #488aec;
    }

    /* Botones */
    .panel-button {
        width: 100%;
        padding: 10px;
        margin-bottom: 12px;
        background-color: #488aec;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: white;
        font-size: 16px;
    }

    .panel-button:last-child {
        margin-bottom: 0;
    }

    .panel-button:hover {
        background-color: #3181d6;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .panel-button:active {
        transform: scale(0.95);
    }

    /* Media Queries */
    @media (max-width: 600px) {
        .button-panel {
            padding: 15px;
        }

        .panel-button {
            font-size: 14px;
        }

        .menu-title {
            font-size: 16px;
        }
    }

    @media (max-width: 400px) {
        .button-panel {
            padding: 10px;
        }

        .panel-button {
            font-size: 12px;
        }

        .menu-title {
            font-size: 14px;
        }
    }
        /* Estilos adicionales para los enlaces como botones */
.panel-button {
    width: 100%;
    padding: 10px;
    margin-bottom: 12px;
    background-color: #488aec;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    font-size: 16px;
    display: block; /* Para que ocupe todo el ancho */
    text-decoration: none; /* Elimina el subrayado del enlace */
    text-align: center; /* Centra el texto */
}

.panel-button:last-child {
    margin-bottom: 0;
}

.panel-button:hover {
    background-color: #3181d6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-decoration: none; /* Mantiene sin subrayado en hover */
    color: white; /* Mantiene el color del texto en hover */
}

.panel-button:active {
    transform: scale(0.95);
}
</style>

<div class="panel-container">
    <div class="button-panel">
        <div class="menu-title">Menú Rápido</div>
        <!-- Opción 1: Usando enlaces <a> directamente -->
        <a href="../../index.html" class="panel-button">Página principal</a>
        <a href="/Games/Laberinto/Laberinto.html" class="panel-button">Juego Laberinto</a>
        <a href="/Games/Game_2/memoria.html" class="panel-button">Juego Memoria</a>
        <a href="trofeos.html" class="panel-button">Trofeos</a>

    </div>

<script>
function navegarA(ruta) {
    window.location.href = ruta;
}
</script>
        `;
    }
}

customElements.define('button-panel', ButtonPanel);
