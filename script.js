// Cuenta atrás
const countdown = () => {
  const target = new Date("November 8, 2025 12:30:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
};

setInterval(countdown, 1000);

// Timeline scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineLine = document.querySelector(".timeline-line");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          const activeCount = document.querySelectorAll(".timeline-item.active").length;
          const total = timelineItems.length;
          const percentage = (activeCount / total) * 100;
          timelineLine.style.height = `${percentage}%`;
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineItems.forEach(item => observer.observe(item));
});
