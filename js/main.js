// Main Website JavaScript

// Modal Management
function openModal(modalType) {
  const modal = document.getElementById(modalType + 'Modal');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(event, modalType) {
  if (event && event.target.id !== modalType + 'Modal') {
    return;
  }
  const modal = document.getElementById(modalType + 'Modal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }
});

// Demo Functions
function toggleFilter(element) {
  element.classList.toggle('active');
}

function runDemo() {
  showSuccessMessage('Scrape started! Processing 500 results...');
  setTimeout(() => {
    hideSuccessMessage();
  }, 3000);
}

// Success Message
function showSuccessMessage(message) {
  const successEl = document.querySelector('.success-message');
  if (successEl) {
    successEl.textContent = message;
    successEl.classList.add('show');
  }
}

function hideSuccessMessage() {
  const successEl = document.querySelector('.success-message');
  if (successEl) {
    successEl.classList.remove('show');
  }
}

// Form Handling
function handleSignup(event) {
  if (event) event.preventDefault();
  const email = event?.target.querySelector('input[type="email"]')?.value;
  if (email) {
    showSuccessMessage('✓ Check your email to get started!');
    setTimeout(() => {
      closeModal(null, 'signup');
      hideSuccessMessage();
    }, 2000);
  }
}

function handleRequest(event) {
  if (event) event.preventDefault();
  showSuccessMessage('✓ Request received! We\'ll be in touch soon.');
  setTimeout(() => {
    closeModal(null, 'request');
    hideSuccessMessage();
  }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  // Update active nav link based on scroll
  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Mobile menu toggle (if implemented)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// Utility function: Validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Utility function: Format phone number
function formatPhone(phone) {
  // Remove non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Format as needed
  return cleaned;
}

// Export functions for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleFilter = toggleFilter;
window.runDemo = runDemo;
window.handleSignup = handleSignup;
window.handleRequest = handleRequest;
window.toggleMobileMenu = toggleMobileMenu;

// MapLeads — Shared JS

function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// Smooth scroll for hash links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});

// Generic modal helpers (used by pages that don't inline their own)
window.openModal  = function(id) {
  const m = document.getElementById(id + 'Modal');
  if (m) { m.classList.add('show'); document.body.style.overflow = 'hidden'; }
};
window.closeModal = function(id) {
  const m = document.getElementById(id + 'Modal');
  if (m) { m.classList.remove('show'); document.body.style.overflow = ''; }
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(m => {
      m.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
});
