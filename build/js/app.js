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


    function Galeria(){
        const CANTIDAD = 10;
        const Galeria = document.querySelector('.gallery');

        for (let i = 1 ;  i<=CANTIDAD ; i++){
            const img = document.createElement('img');
            img.src = `../src/img/gallery/thumb/${i}.jpg`;
            img.loading="lazy";
            img.width="300";
            img.height="300";
            img.alt = `Imagen ${i}`;
            Galeria.appendChild(img);

            //mostrar imagen en grande al hacer click
            imagen.Onclick = function(){
                mostrarImagen(i);
        }
    }

}
    
 const fills = document.querySelectorAll(".fill");
    fills.forEach(bar => {
      let width = parseInt(bar.style.width);
      setInterval(() => {
        let random = (Math.random() * 10 - 5); // variación aleatoria
        width = Math.min(100, Math.max(0, width + random));
        bar.style.width = width + "%";
      }, 2000);
    });