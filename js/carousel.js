// Carousel functionality
let currentSlide = 0;
const track = document.querySelector('.carrusel-track');
const items = document.querySelectorAll('.carrusel-track .item');
const itemWidth = 100; // percentage

function updateCarouselPosition() {
  if (track) {
    track.style.transform = `translateX(-${currentSlide * itemWidth}%)`;
  }
}

function carouselNext() {
  const totalItems = items.length;
  currentSlide = (currentSlide + 1) % totalItems;
  updateCarouselPosition();
}

function carouselPrev() {
  const totalItems = items.length;
  currentSlide = (currentSlide - 1 + totalItems) % totalItems;
  updateCarouselPosition();
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  carouselNext();
}, 5000);
