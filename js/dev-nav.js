// Navegación entre secciones del sub-nav
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.sub-nav__btn');
    const sections = document.querySelectorAll('.section-container');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remover clase activa de todos los botones
            navButtons.forEach(btn => {
                btn.classList.remove('sub-nav__btn--active');
            });
            
            // Agregar clase activa al botón clickeado
            this.classList.add('sub-nav__btn--active');
            
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Mostrar la sección seleccionada
            const activeSection = document.getElementById(targetSection);
            if (activeSection) {
                activeSection.classList.remove('hidden');
                
                
            }
        });
    });
});
