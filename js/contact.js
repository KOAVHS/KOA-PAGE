/**
 * Contact Window Management
 * Maneja la apertura y cierre de la ventana modal de contacto
 */

function abrirVentanaWanted() {
    const overlay = document.getElementById('overley');
    if (overlay) {
        overlay.style.display = 'block';
    }
}

function cerrarVentanaWanted() {
    const overlay = document.getElementById('overley');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overley');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                cerrarVentanaWanted();
            }
        });
    }
});
