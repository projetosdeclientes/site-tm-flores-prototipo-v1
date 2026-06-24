function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  // Fallback: se IO não existir, mostra tudo
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  elements.forEach(el => {
    // Elementos já visíveis no carregamento (acima da dobra) ativam imediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('active');
    } else {
      observer.observe(el);
    }
  });

  // Garantia: depois de 1.5s, qualquer reveal ainda inativo é ativado
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-scale:not(.active)')
      .forEach(el => el.classList.add('active'));
  }, 1500);
}

function bootReveal() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal, { once: true });
  } else {
    initReveal();
  }
}

bootReveal();

// CRÍTICO: bfcache — ao voltar pelo botão "voltar", DOMContentLoaded não dispara.
// pageshow com event.persisted=true indica restauração do bfcache.
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // Reset: re-ativar todos para garantir que aparecem
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('active'));
  }
});
