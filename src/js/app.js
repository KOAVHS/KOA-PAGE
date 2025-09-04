fetch('../updates.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar updates.json');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const grid = document.querySelector('.updates-grid');
        if (grid) {
            grid.innerHTML = data.reverse().map(update =>  {
                return `<div class="update-card">
                    <h3>${update.fecha}</h3>
                    <p>${update.titulo}</p>
                </div>`;
            }).join('');
        } else {
            console.warn('No se encontró el contenedor .updates-grid');
        }
    })
    .catch(error => {
        console.error('Error al cargar actualizaciones:', error);
        const grid = document.querySelector('.updates-grid');
        if (grid) {
            grid.innerHTML = '<p style="color:red">No se pudieron cargar las actualizaciones.</p>';
        }
    });