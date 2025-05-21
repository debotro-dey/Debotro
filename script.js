// Check if element is fully in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add animate class when element comes into view
function animateOnScroll(selector) {
  const element = document.querySelector(selector);
  if (element && !element.classList.contains('animate') && isInViewport(element)) {
    element.classList.add('animate');
  }
}

// Listen to scroll and DOMContentLoaded for animations
document.addEventListener('scroll', () => {
  animateOnScroll('.box1');
  animateOnScroll('.para1');
});

document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll('.box1');
  animateOnScroll('.para1');
});
