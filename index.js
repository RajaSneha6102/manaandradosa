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
  const slider = document.querySelector('.menu-items');
  const items = document.querySelectorAll('.menu-item');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let currentIndex = 0;

  function getItemsPerPage() {
    return window.innerWidth <= 768 ? 4 : 3;
  }

  function updateSlider() {
    const itemsPerPage = getItemsPerPage();
    const itemWidth = items[0].offsetWidth + 32; // 32px = 2rem gap
    const itemsInRow = window.innerWidth <= 768 ? 2 : 3;
    const offset = Math.floor(currentIndex * itemWidth * itemsInRow);
    slider.style.transform = `translateX(-${offset}px)`;
  }

  function handleNext() {
    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentIndex < totalPages - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  next.addEventListener('click', handleNext);
  prev.addEventListener('click', handlePrev);
  window.addEventListener('resize', updateSlider);

  updateSlider(); // Initial call
});



