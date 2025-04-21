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

// Scroll efecto de barrido hacia abajo
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
  threshold: 0.5,
  rootMargin: "-20% 0px -80% 0px"
});

revealImages.forEach(img => observer.observe(img));
