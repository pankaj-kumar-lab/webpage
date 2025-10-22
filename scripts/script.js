let current = 0;
const slides = document.querySelectorAll('.slide');

function show(idx) {
  slides.forEach((s,i) => s.classList.toggle('active', i===idx));
}

function changeSlide(dir) {
  current = (current + dir + slides.length) % slides.length;
  show(current);
}

show(current);
setInterval(() => changeSlide(1), 5000);
