"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EarlyAccess } from "./early-access";
import { EarlyAccessTrigger } from "./early-access-trigger";
import { SiteEffects } from "./site-effects";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();
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
      <aside className="access-dock">
        <EarlyAccessTrigger>
          <span>Early access</span>
          <i aria-hidden="true">↗</i>
        </EarlyAccessTrigger>
      </aside>
      {pathname === "/" && (
        <button
          className={`home-back-to-top${showTop ? " is-visible" : ""}`}
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}
      <SiteFooter variant={pathname === "/" ? "home" : "inner"} />
      <EarlyAccess
        open={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
}
