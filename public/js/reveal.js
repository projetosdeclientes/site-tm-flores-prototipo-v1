function initReveal() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Uma vez animado, não precisa observar mais
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  elements.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
