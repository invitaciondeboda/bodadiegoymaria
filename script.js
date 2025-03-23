// Esperamos a que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.querySelector(".mensaje");

    // Añadimos una animación que hará que el texto aparezca lentamente
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opacity 2s ease-in";

    // Después de un breve retraso, se hace visible el texto
    setTimeout(function() {
        mensaje.style.opacity = 1;
    }, 500); // 500ms de espera antes de que comience la animación
});

