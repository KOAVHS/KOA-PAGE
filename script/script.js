
const shirtImage = document.getElementById('shirtImage');

// Rutas de las imágenes en la carpeta 'producto'
const producto = [
  'producto/f093a2a510d543e98fffe9b85b59c76e-removebg-preview.png', 
  'producto/shirtout-removebg-preview.png'
];
let index = 0;

// Función para alternar las imágenes automáticamente
function changeImage() {
  index = (index + 1) % producto.length; 
  shirtImage.src = producto[index];      
}

// Intervalo de tiempo para cambiar la imagen 
setInterval(changeImage, 3000);
  
