// Cuenta atrás
const countdown = () => {
  const destino = new Date("2025-11-08T12:30:00");
  const ahora = new Date();
  const diff = destino - ahora;

  const segundos = Math.floor((diff / 1000) % 60);
  const minutos = Math.floor((diff / 1000 / 60) % 60);
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
};

setInterval(countdown, 1000);

// Scroll efecto de barrido (reveal/disappear)
document.addEventListener('DOMContentLoaded', () => {
  const revealImages = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -20% 0px"
  });

  revealImages.forEach(img => observer.observe(img));
});

// Activar/desactivar el desplegable
document.querySelector(".desplegable-btn").addEventListener("click", function () {
  this.classList.toggle("active");
});


document.getElementById("botonAbrir").addEventListener("click", function () {
  const sobre = document.querySelector(".sobre");
  const pantallaInicial = document.getElementById("pantalla-inicial");
  const contenido = document.getElementById("contenido-principal");
  const audio = document.getElementById("audioBoda");

  // Añadir clase para activar animación
  sobre.classList.add("sobre-abierta");

  // Reproducir audio
  audio.play();

  // Esperar a que termine la animación antes de mostrar contenido
  setTimeout(() => {
    pantallaInicial.style.display = "none";
    contenido.style.display = "block";
  }, 3000); // duración de la animación
});
