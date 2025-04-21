const targetDate = new Date("2025-11-08T12:30:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "<p>¡Ya es el gran día!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `
    <div class="cuenta-item">
      <div class="numero">${days}</div>
      <div class="unidad">DÍAS</div>
    </div>
    <div class="cuenta-item">
      <div class="numero">${hours}</div>
      <div class="unidad">HORAS</div>
    </div>
    <div class="cuenta-item">
      <div class="numero">${minutes}</div>
      <div class="unidad">MIN</div>
    </div>
    <div class="cuenta-item">
      <div class="numero">${seconds}</div>
      <div class="unidad">SEG</div>
    </div>`;
}

setInterval(updateCountdown, 1000);

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

