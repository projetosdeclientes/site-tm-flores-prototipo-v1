function initTilt3D() {
  // Desativar em touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);  // -1 a 1
      const dy = (e.clientY - cy) / (rect.height / 2);  // -1 a 1

      const rotX = -dy * 8;  // Max 8deg
      const rotY =  dx * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTilt3D);
} else {
  initTilt3D();
}
