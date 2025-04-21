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
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5, // El 50% de la imagen debe estar visible para que se active
    rootMargin: "0px 0px -50% 0px" // Se activa cuando la imagen está en el centro
  });

  revealImages.forEach(img => observer.observe(img));
});
