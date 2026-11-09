"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import Logo from "./Logo";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Logo />
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn" href={site.bookingUrl}>
          Schedule a Consultation
        </Link>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <Link className="btn" href={site.bookingUrl} onClick={() => setOpen(false)}>
          Schedule a Consultation
        </Link>
      </div>
    </header>
  );
}
