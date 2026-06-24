import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SELECTOR = '[class*="reveal"]';

export function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const activate = (el: Element) => el.classList.add("active");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || prefersReduced) {
      document.querySelectorAll(SELECTOR).forEach(activate);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            activate(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.classList.contains("active")) io.observe(el);
      });
    };

    observeAll();

    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches?.(SELECTOR)) io.observe(node);
          node.querySelectorAll?.(SELECTOR).forEach((el) => {
            if (!el.classList.contains("active")) io.observe(el);
          });
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(`${SELECTOR}:not(.active)`).forEach(activate);
    }, 1500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);
}
