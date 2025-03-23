// Este script es opcional, solo si deseas añadir algún comportamiento dinámico.
// Aquí te dejo un ejemplo simple de desplazamiento suave del texto al cargar la página.

document.addEventListener("DOMContentLoaded", function() {
    const textoImagen = document.querySelector(".texto-imagen");
    
    // Agrega una animación de aparición suave para el texto
    textoImagen.style.opacity = 0;
    textoImagen.style.transition = "opacity 2s";
    setTimeout(function() {
        textoImagen.style.opacity = 1;
    }, 500);  // El texto se vuelve visible después de medio segundo
});

