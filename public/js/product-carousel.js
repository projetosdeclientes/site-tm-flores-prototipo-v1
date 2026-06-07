function initProductCarousels() {
  document.querySelectorAll('.products-carousel').forEach(carousel => {
    let isDown = false;
    let startX, scrollLeft;

    carousel.addEventListener('pointerdown', e => {
      isDown = true;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.setPointerCapture(e.pointerId);
    });

    carousel.addEventListener('pointerup', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('pointerleave', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('pointermove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x    = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductCarousels);
} else {
  initProductCarousels();
}
