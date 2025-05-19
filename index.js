// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Highlight current nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const offsetTop = sec.offsetTop - 100;
    const offsetHeight = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.menu-slider');
  const items = document.querySelectorAll('.menu-items');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  next.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});
