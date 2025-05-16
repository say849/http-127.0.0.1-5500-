// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.card, .gallery-grid img');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// زر الرجوع لأعلى
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// كتابة متحركة
const textArray = ["فلورينا", "تنسيق حفلات", "زهور فاخرة", "حفلات زفاف ساحرة"];
let current = 0;
let char = 0;
function type() {
  const typedText = document.getElementById("typed-text");
  if (char < textArray[current].length) {
    typedText.innerHTML += textArray[current].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  const typedText = document.getElementById("typed-text");
  if (char > 0) {
    typedText.innerHTML = textArray[current].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    current = (current + 1) % textArray.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", type);