// Cuenta atrás
const countdown = () => {
  const endDate = new Date("November 8, 2025 12:30:00").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = days;
  document.getElementById("horas").innerText = hours;
  document.getElementById("minutos").innerText = minutes;
  document.getElementById("segundos").innerText = seconds;
};

setInterval(countdown, 1000);

// Línea de planning animada y aparición de imágenes
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineLine = document.querySelector(".timeline-line");

function revealOnScroll() {
  let windowBottom = window.scrollY + window.innerHeight;
  let lastVisibleIndex = -1;

  timelineItems.forEach((item, index) => {
    const itemTop = item.offsetTop;
    if (windowBottom > itemTop + 50) {
      item.classList.add("visible");
      lastVisibleIndex = index;
    }
  });

  if (lastVisibleIndex >= 0) {
    const lastItem = timelineItems[lastVisibleIndex];
    const lineHeight = lastItem.offsetTop + lastItem.offsetHeight / 2;
    timelineLine.style.height = `${lineHeight}px`;
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
