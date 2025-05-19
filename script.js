function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll(selector) {
  const element = document.querySelector(selector);
  if (element && !element.classList.contains('animate') && isInViewport(element)) {
    element.classList.add('animate');
  }
}

document.addEventListener('scroll', () => {
  animateOnScroll('.box1');   // triggers typing animation
  animateOnScroll('.para1');  // triggers fade-in animation
});

window.addEventListener('load', () => {
  animateOnScroll('.box1');
  animateOnScroll('.para1');
});
