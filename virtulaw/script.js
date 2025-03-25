// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const siteHeader = document.getElementById('siteHeader');

// Scroll to Top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Toggle mobile navigation menu
navToggle.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
  }
});

// Change header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
  // Show/Hide Scroll to Top Button
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 768) {
        navMenu.style.display = 'none';
      }
    }
  });
});

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const icon = question.querySelector('.faq-toggle-icon');
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.textContent = '+';
    } else {
      answer.style.display = 'block';
      icon.textContent = '-';
    }
  });
});

// Scroll to Top Button functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for .reveal elements
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = { threshold: 0.1 };
function revealOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}
const revealObserver = new IntersectionObserver(revealOnScroll, observerOptions);
revealElements.forEach(el => { revealObserver.observe(el); });

// Testimonial Slider
const testimonialSlider = document.getElementById('testimonialSlider');
if (testimonialSlider) {
  const slides = Array.from(testimonialSlider.querySelectorAll('.testimonial-slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
  }
  updateSlider();
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  }
}
