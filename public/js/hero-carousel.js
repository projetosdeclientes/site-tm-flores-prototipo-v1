class HeroCarousel {
  constructor() {
    this.track = document.getElementById('heroTrack');
    if (!this.track) return;
    this.slides = this.track.querySelectorAll('.hero-slide');
    this.dots = document.querySelectorAll('.hero-dot');
    this.current = 0;
    this.autoInterval = null;
    this.isDragging = false;
    this.startX = 0;
    this.init();
  }

  init() {
    this.startAuto();
    this.bindEvents();
    this.bindParallax();
  }

  goTo(index) {
    this.slides[this.current].classList.remove('active');
    this.dots[this.current]?.classList.remove('active');
    this.current = (index + this.slides.length) % this.slides.length;
    this.track.style.transform = `translateX(-${this.current * 100}%)`;
    this.slides[this.current].classList.add('active');
    this.dots[this.current]?.classList.add('active');
  }

  next() { this.goTo(this.current + 1); }
  prev() { this.goTo(this.current - 1); }

  startAuto() {
    this.autoInterval = setInterval(() => this.next(), 4000);
  }

  bindEvents() {
    // Setas
    document.querySelector('.hero-arrow-next')?.addEventListener('click', () => {
      this.next(); this.resetAuto();
    });
    document.querySelector('.hero-arrow-prev')?.addEventListener('click', () => {
      this.prev(); this.resetAuto();
    });

    // Dots
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { this.goTo(i); this.resetAuto(); });
    });

    // Swipe (touch e mouse)
    this.track.addEventListener('pointerdown', e => {
      this.isDragging = true;
      this.startX = e.clientX;
      this.track.setPointerCapture(e.pointerId);
    });
    this.track.addEventListener('pointerup', e => {
      if (!this.isDragging) return;
      const diff = e.clientX - this.startX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) this.next();
        else this.prev();
      }
      this.isDragging = false;
      this.resetAuto();
    });
  }

  bindParallax() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      this.slides.forEach(slide => {
        const img = slide.querySelector('.hero-parallax-layer img');
        if (img) img.style.transform = `translateY(${scrollY * 0.25}px)`;
      });
    }, { passive: true });
  }

  resetAuto() {
    clearInterval(this.autoInterval);
    this.startAuto();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new HeroCarousel());
} else {
  new HeroCarousel();
}
