// Cuenta atrás
function actualizarCuentaAtras() {
  const fechaBoda = new Date("2025-11-08T12:30:00");
  const ahora = new Date();
  const diff = fechaBoda - ahora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarCuentaAtras, 1000);
actualizarCuentaAtras();

// Animación scroll para timeline
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in, .timeline-item').forEach(el => {
  observer.observe(el);
});
