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
const track = document.querySelector('.carousel-track');
let position = 0;
const speed = 2;


function moveCarousel(){
    position -= speed;
    if (position <= -track.scrollWidth / 2) {
        position = 0;
    }
}
track.style.transform = `translateX(${position}px)`;
requestAnimationFrame(moveCarousel);


moveCarousel();
track.parentElement.addEventListener(`mouseenter`, () => speed = 0);
track.parentElement.addEventListener(`mouseleave`, () => speed = 2);