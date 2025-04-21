// Función que comprueba si el elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Añadir la clase "visible" cuando el elemento esté en el viewport
function handleScroll() {
  const eventos = document.querySelectorAll('.evento');
  eventos.forEach(evento => {
    if (isElementInViewport(evento)) {
      evento.classList.add('visible');
    }
  });
}

// Añadir el event listener para el scroll
window.addEventListener('scroll', handleScroll);

// Función para la cuenta atrás
const countdownDate = new Date("Nov 8, 2025 12:30:00").getTime();
const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `<div class="count-item">
      <span class="count-number">${days}</span><span class="count-label">DÍAS</span>
    </div>
    <div class="count-item">
      <span class="count-number">${hours}</span><span class="count-label">HORAS</span>
    </div>
    <div class="count-item">
      <span class="count-number">${minutes}</span><span class="count-label">MIN</span>
    </div>
    <div class="count-item">
      <span class="count-number">${seconds}</span><span class="count-label">SEG</span>
    </div>`;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "¡La boda ha llegado!";
  }
}, 1000);
