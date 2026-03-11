let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

next.addEventListener('click', () => {
  if (index < slides.length - 3) index++;
  else index = 0; // يرجع للأول
  updateSlider();
});

prev.addEventListener('click', () => {
  if (index > 0) index--;
  else index = slides.length - 3;
  updateSlider();
});