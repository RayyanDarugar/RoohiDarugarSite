"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  ".section h2",
  ".qcard",
  ".scard",
  ".hcard",
  ".tl-row",
  ".feature",
  ".tile",
  ".post",
  "a.tool",
  ".women-media",
  ".promises li",
  ".faq details",
  ".press",
  ".pull",
  ".about-intro .media",
  ".post-featured",
].join(",");

/** Fades elements up as they scroll into view. Content stays visible without JS or with reduced motion. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add("in");
            io.unobserve(el);
            // drop the stagger once revealed so hover transitions stay instant
            window.setTimeout(() => (el.style.transitionDelay = ""), 1100);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => {
      // stagger siblings in the same row
      const idx = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.transitionDelay = `${Math.min(idx, 4) * 70}ms`;
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
