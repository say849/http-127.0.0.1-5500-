// كتابة تلقائية في العنوان
const text = "فلورينا .. سحر كل مناسبة!";
let index = 0;

function typeText() {
  const typedText = document.getElementById("typed-text");
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}
window.onload = typeText;

// تغيير الخلفية كل فترة
const colors = [
  "linear-gradient(to right, #4b2c4d, #7c4976)",
  "linear-gradient(to right, #3b1f2b, #6a3c5a)",
  "linear-gradient(to right, #2c3e50, #4ca1af)"
];
let current = 0;
setInterval(() => {
  document.body.style.background = colors[current];
  document.body.style.transition = "background 2s ease";
  current = (current + 1) % colors.length;
}, 10000); // كل 10 ثواني

// تأثير ظهور العناصر عند التمرير
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});