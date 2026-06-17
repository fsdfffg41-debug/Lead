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
