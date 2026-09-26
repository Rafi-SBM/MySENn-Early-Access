"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./site-header.module.css";

const links = [
  ["Why MySENn", "/"],
  ["How it helps", "/how-it-helps"],
  ["Our story", "/our-story"],
  ["Community", "/community"],
  ["FAQs", "/faq"],
] as const;

export function SiteHeader({ onEarlyAccess }: { onEarlyAccess?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    const closeWideMenu = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("resize", closeWideMenu, { passive: true });
    return () => window.removeEventListener("resize", closeWideMenu);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav-shell nav-story-map" aria-label="Primary navigation">
        <Link
          className="brand brand-lockup brand-story-card"
          href="/"
          onClick={() => {
            close();
            window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
          }}
          aria-label="MySENn home"
        >
          <div className="header-logo-box">
            <Image
              className="brand-logo brand-logo-full"
              src="/assets/logo-web.png"
              alt="MySENn - Understand Their World. Support Their Way."
              width={180}
              height={50}
              priority
            />
          </div>
        </Link>
        <div className="nav-center-wrap nav-route-wrap">
          <div className="nav-route-line" aria-hidden="true">
            <span />
            <i />
          </div>
          <div
            className={`nav-links ${open ? "is-open" : ""}`}
            id="site-navigation"
          >
            {links.map(([label, href]) => {
              const active = pathname === href;
              return (
                <Link
                  className={active ? "is-current" : undefined}
                  key={href}
                  href={href}
                  onClick={() => {
                    close();
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="nav-actions">
          <button
            className="early-link magnetic"
            type="button"
            onClick={onEarlyAccess}
          >
            <span className="early-copy">
              <small>Be part of it</small>
              <strong>Early access</strong>
            </span>
            <span className="early-arrow">↗</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
