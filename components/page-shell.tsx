"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EarlyAccess } from "./early-access";
import { EarlyAccessTrigger } from "./early-access-trigger";
import { SiteEffects } from "./site-effects";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import "./page-shell.module.css";

export function PageShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      const timer = window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }, 10);
      const frame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      });
      return () => {
        window.clearTimeout(timer);
        window.cancelAnimationFrame(frame);
      };
    }
  }, [pathname]);

  useEffect(() => {
    const open = () => setEarlyAccessOpen(true);
    const onScroll = () => setShowTop(window.scrollY > 560);
    const checkHash = () => {
      if (window.location.hash === "#early-access") {
        setEarlyAccessOpen(true);
      }
    };
    window.addEventListener("mysenn:open-early-access", open);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", checkHash);
    onScroll();
    checkHash();
    return () => {
      window.removeEventListener("mysenn:open-early-access", open);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);
  return (
    <>
      <SiteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader onEarlyAccess={() => setEarlyAccessOpen(true)} />
      <main id="main">{children}</main>
      <button
        className={`site-back-to-top${showTop ? " is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
      <EarlyAccessTrigger className="mobile-early-access">
        <span>Early access</span>
        <i aria-hidden="true">↗</i>
      </EarlyAccessTrigger>
      <SiteFooter variant={pathname === "/" ? "home" : "inner"} />
      <EarlyAccess
        open={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
}
