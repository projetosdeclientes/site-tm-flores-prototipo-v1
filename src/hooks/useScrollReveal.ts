import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: removing this to keep it consistent with the user's previous implementation if they prefer "one-way" reveal
          // entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const observe = () => {
      const revealElements = document.querySelectorAll(
        '.reveal-title, .reveal-stagger, .reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
      );
      revealElements.forEach((el) => observer.observe(el));
    };

    observe();

    // Create a MutationObserver to observe changes in the DOM and re-attach the IntersectionObserver
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
