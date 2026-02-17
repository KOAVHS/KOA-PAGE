/**
 * Updates Management
 * Carga las actualizaciones desde updates.json y las renderiza en el grid
 */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.updates-grid');
    
    if (!grid) {
        console.warn('No se encontró el contenedor .updates-grid');
        return;
    }

    fetch('updates.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar updates.json');
            }
            return response.json();
        })
        .then(data => {
            console.log('Updates cargadas:', data);
            grid.innerHTML = data.reverse().map(update => {
                return `<div class="update-card">
                    <h3>${update.fecha}</h3>
                    <p>${update.titulo}</p>
                </div>`;
            }).join('');
        })
        .catch(error => {
            console.error('Error al cargar actualizaciones:', error);
            grid.innerHTML = '<p style="color:#ff00ff; text-align:center;">No se pudieron cargar las actualizaciones.</p>';
        });
});

/**
 * Animated Fill Bars
 * Anima las barras de progreso con variación aleatoria
 */
document.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.fill');
    
    fills.forEach(bar => {
        let width = parseInt(bar.style.width) || 0;
        
        setInterval(() => {
            const random = (Math.random() * 10 - 5);
            width = Math.min(100, Math.max(0, width + random));
            bar.style.width = width + '%';
        }, 2000);
    });
});
