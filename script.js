// Esperar que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("music");

    // Comprobar si el estado de la música ya se guardó en el almacenamiento local
    if (localStorage.getItem("musicPlaying") === "true") {
        audio.play(); // Reproducir la música automáticamente
    } else {
        audio.pause(); // Pausar si no se encuentra el valor
    }

    // Cuando la música se reproduce, guardamos el estado para futuras visitas
    audio.addEventListener("play", function() {
        localStorage.setItem("musicPlaying", "true");
    });

    // Si la música se pausa, también lo guardamos
    audio.addEventListener("pause", function() {
        localStorage.setItem("musicPlaying", "false");
    });
});
