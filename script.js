// Animation trigger on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".fade-in");

  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("animate");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);
