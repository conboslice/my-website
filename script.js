// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const siteHeader = document.getElementById('siteHeader');

// Scroll to Top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Toggle mobile navigation menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
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
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
      }
    }
  });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('i');
    
    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(item => {
      if (item !== answer) {
        item.style.display = 'none';
        item.previousElementSibling.classList.remove('active');
        item.previousElementSibling.querySelector('i').classList.remove('fa-minus');
        item.previousElementSibling.querySelector('i').classList.add('fa-plus');
      }
    });
    
    // Toggle current answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.classList.remove('active');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      answer.style.display = 'block';
      question.classList.add('active');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});

// Scroll to Top Button functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Parallax effect for hero section
const heroParallax = document.querySelector('.hero-parallax');
if (heroParallax) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroParallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
}

// Intersection Observer for scroll animations
const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.1
});

document.querySelectorAll('.benefit-card, .timeline-item').forEach(element => {
  observer.observe(element);
});

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
