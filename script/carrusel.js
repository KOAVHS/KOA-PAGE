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