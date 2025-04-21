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
        entry.target.classList.add('visible'); // Añadir clase visible solo una vez
      }
    });
  }, {
    threshold: 0, // Se activa cuando cualquier parte de la imagen entra en la vista
    rootMargin: "0px 0px -50% 0px" // Activación cuando la imagen está en el centro de la pantalla
  });

  revealImages.forEach(img => observer.observe(img));
});

