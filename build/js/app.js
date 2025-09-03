let nombre = "KOA VHS";
let descripcion = "Venta de productos de alta calidad para su hogar o negocio";
let imagen = "src/img/logo.png";

let ofertas = [
  {
    nombre: "Shirt",
    descripcion: "Una camiseta de alta calidad",
    precio: 249,
    imagen: "src/img/ofertas/1.png",
  },
  {
    nombre: "Shirt",
    descripcion: "Una camiseta de alta calidad",
    precio: 249,
    imagen: "src/img/ofertas/2.png",
  },
];

let productos = [
  {
    nombre: "Shirt",
    descripcion: "Una camiseta",
    precio: 249,
    imagen: "src/img/productos/1.png",
  },
  {
    nombre: "Shirt",
    descripcion: "Una camiseta",
    precio: 249,
    imagen: "src/img/productos/2.png",
  },
];  
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