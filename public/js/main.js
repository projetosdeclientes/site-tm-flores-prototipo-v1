document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAV: glassmorphism ao scroll ──────────────────────────────
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial
  }

  // ── 2. MOBILE MENU ───────────────────────────────────────────────
  const hamburger  = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay    = document.getElementById('mobileMenuOverlay');
  const closeBtn   = mobileMenu?.querySelector('.mobile-menu-close');

  function openMenu() {
    mobileMenu?.classList.add('open');
    overlay?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Fechar com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // ── 3. NAV DROPDOWN (desktop) ────────────────────────────────────
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu   = dropdown.querySelector('.nav-dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('mouseenter', () => menu.classList.add('open'));
      dropdown.addEventListener('mouseleave', () => menu.classList.remove('open'));
      toggle.addEventListener('focus', () => menu.classList.add('open'));
    }
  });

  // ── 4. BOTÃO WHATSAPP FLUTUANTE ──────────────────────────────────
  const floatBtn = document.getElementById('floatWhatsApp');
  if (floatBtn) {
    // Mostrar após 3s ou ao chegar a 30% da página
    setTimeout(() => floatBtn.classList.add('visible'), 3000);
    window.addEventListener('scroll', () => {
      const threshold = document.body.scrollHeight * 0.3;
      if (window.scrollY > threshold) {
        floatBtn.classList.add('visible');
      }
    }, { passive: true });
  }

  // ── 5. TRANSIÇÃO ENTRE PÁGINAS ───────────────────────────────────
  const transitionOverlay = document.getElementById('pageTransitionOverlay');
  if (transitionOverlay) {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      // Apenas links internos .html (não âncoras, não externos)
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.includes('__lovable_token')) return;

      link.addEventListener('click', e => {
        // Ignorar se abrir em nova aba
        if (e.metaKey || e.ctrlKey) return;
        
        e.preventDefault();
        const dest = link.href;
        transitionOverlay.classList.add('entering');
        setTimeout(() => { window.location.href = dest; }, 550);
      });
    });

    // Ao carregar nova página: fade out do overlay
    window.addEventListener('pageshow', () => {
      transitionOverlay.classList.remove('entering');
    });
  }

  // ── 6. CURSOR MAGNÉTICO (desktop only) ──────────────────────────
  if (!window.matchMedia('(pointer: coarse)').matches) {
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width  / 2)) * 0.22;
        const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.22;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ── 7. CARROSSEL DE PRODUTOS (seções da home) ────────────────────
  if (typeof initProductCarousels === 'function') {
    initProductCarousels();
  }

  // ── 8. SCROLL REVEAL ─────────────────────────────────────────────
  if (typeof initReveal === 'function') {
    initReveal();
  }

  // ── 9. TILT 3D ───────────────────────────────────────────────────
  if (typeof initTilt3D === 'function') {
    initTilt3D();
  }
});
