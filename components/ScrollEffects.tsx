"use client";

import { useEffect } from "react";

/**
 * Porta os scripts da versão HTML original:
 *  - NAV: alterna a classe `stuck` ao rolar a página
 *  - REVEAL: anima elementos `.reveal` ao entrarem na viewport
 *  - COUNTERS: anima números `.counter` (data-to) ao ficarem visíveis
 */
export default function ScrollEffects() {
  useEffect(() => {
    // NAV
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("stuck", window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // REVEAL
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // COUNTERS
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.to ?? "0", 10);
      const dur = 1600;
      let start: number | null = null;
      const tick = (now: number) => {
        if (start === null) start = now;
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = String(Math.floor(ease * target));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = String(target);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>(".counter").forEach((el) => cio.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}
