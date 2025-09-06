document.getElementById("form-suscripcion").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje-suscripcion");
  
    // Aquí podrías conectar con un servicio de almacenamiento, como una base de datos o servicio de email marketing.
    // Ejemplo de mensaje de éxito para el usuario:
    mensaje.textContent = "¡Gracias por suscribirte! Te notificaremos en cuanto abramos nuestra tienda.";
    
    // Limpia el campo de correo después del registro
    document.getElementById("email").value = "";
  });
  