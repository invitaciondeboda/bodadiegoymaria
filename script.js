const targetDate = new Date("2025-11-08T12:30:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "¡Ya es el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `
    ${days}<span> DÍAS</span> 
    ${hours}<span> HORAS</span> 
    ${minutes}<span> MIN</span> 
    ${seconds}<span> SEG</span>`;
}

setInterval(updateCountdown, 1000);
