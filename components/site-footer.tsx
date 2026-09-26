"use client";

import Image from "next/image";
import Link from "next/link";
import { EarlyAccessTrigger } from "./early-access-trigger";
import "./site-footer.module.css";

type SiteFooterProps = { variant?: "home" | "inner" };

export function SiteFooter({ variant = "inner" }: SiteFooterProps) {
  const home = variant === "home";
  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-a" aria-hidden="true" />
      <div className="footer-glow footer-glow-b" aria-hidden="true" />
      {home && (
        <>
          <div className="footer-story-ribbon" aria-hidden="true">
            <div>
              {[
                "small wins",
                "hard mornings",
                "what helped",
                "sleep changes",
                "quiet resets",
                "appointments",
                "small wins",
                "hard mornings",
                "what helped",
                "sleep changes",
                "quiet resets",
                "appointments",
              ].map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  {index < 11 && <i>✦</i>}
                </span>
              ))}
            </div>
          </div>
          <div className="page-shell footer-closing">
            <div className="footer-closing-copy">
              <span className="footer-eyebrow">
                Built around real family life.
              </span>
              <h2>
                <span className="footer-heading-line">
                  Start the next conversation
                </span>
                <span className="footer-heading-line">
                  with <em>more context.</em>
                </span>
              </h2>
              <p>
                Join MySENn early access for a calmer way to hold onto what matters.
              </p>
              <EarlyAccessTrigger className="footer-cta">
                Join early access <span>↗</span>
              </EarlyAccessTrigger>
            </div>
            <figure className="footer-image-card footer-image-new">
              <Image
                src="https://images.pexels.com/photos/7943981/pexels-photo-7943981.jpeg?cs=srgb&dl=pexels-nicola-barts-7943981.jpg&fm=jpg"
                alt="Mother and daughter sharing a learning moment at home"
                width={720}
                height={520}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="footer-photo-sticker sticker-one">seen</div>
              <div className="footer-photo-sticker sticker-two">remembered</div>
            </figure>
          </div>
        </>
      )}

      <div className="footer-compact-wrap page-shell">
        <div className="footer-columns-grid">
          <div className="footer-brand-col">
            <Link className="footer-logo" href="/" aria-label="MySENn home">
              <div className="footer-logo-box">
                <Image
                  className="footer-logo-img"
                  src="/assets/logo-web.png"
                  alt="MySENn - Understand Their World. Support Their Way."
                  width={154}
                  height={44}
                  priority
                />
              </div>
            </Link>
            <p className="footer-tagline">
              Built from lived experience.
              <br />
              Shaped around real family life.
            </p>
            <a className="footer-email-capsule" href="mailto:support@mysenn.com">
              <svg
                className="footer-capsule-mail-icon"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>support@mysenn.com</span>
              <svg
                className="footer-capsule-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <div className="footer-social-row" aria-label="Social links">
              <a
                href="https://www.linkedin.com/company/mysenn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social-circle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64.9 0 1.64-.74 1.64-1.64 0-.9-.74-1.64-1.64-1.64z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="footer-social-circle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="footer-social-circle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="footer-social-circle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.5l5.75 3.26-5.75 3.26z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-heading">EXPLORE</span>
            <Link className="footer-nav-item" href="/">
              <span>Why MySENn</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="footer-nav-item" href="/how-it-helps">
              <span>How it helps</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="footer-nav-item" href="/our-story">
              <span>Our story</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="footer-nav-item" href="/community">
              <span>Community</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="footer-nav-item" href="/faq">
              <span>FAQs</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          <div className="footer-nav-col footer-legal-col">
            <span className="footer-col-heading">LEGAL &amp; PRIVACY</span>
            <Link className="footer-nav-item" href="/privacy-policy">
              <span>Privacy policy</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="footer-nav-item" href="/cookie-policy">
              <span>Cookie policy</span>
              <svg className="footer-link-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>

            <div className="footer-acorn-endorsement">
              <a
                href="https://www.acorncompliance.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-acorn-card"
                title="Acorn Compliance - UK GDPR Assured"
              >
                <div className="footer-acorn-seal-box">
                  <Image
                    src="/assets/allies/acorn-seal.png"
                    alt="Acorn Compliance - GDPR Compliant Assured"
                    width={68}
                    height={68}
                    style={{ width: "66px", height: "66px", objectFit: "contain" }}
                  />
                </div>
                <div className="footer-acorn-info">
                  <span className="acorn-status-tag">UK GDPR ASSURED</span>
                  <strong>Acorn Compliance</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="footer-allies-col">
            <span className="footer-col-heading">SUPPORTED BY &amp; PARTNERS</span>
            <div className="footer-partners-grid">
              <a
                href="https://sparkfx.net/"
                target="_blank"
                rel="noreferrer"
                className="footer-partner-card"
                title="SparkFX"
              >
                <div className="partner-logo-box">
                  <Image
                    src="/assets/allies/sparkfx.png"
                    alt="SparkFX"
                    width={112}
                    height={26}
                    style={{ width: "auto", height: "24px", objectFit: "contain" }}
                  />
                </div>
              </a>

              <a
                href="https://www.fsb.org.uk/"
                target="_blank"
                rel="noreferrer"
                className="footer-partner-card"
                title="FSB"
              >
                <div className="partner-logo-box">
                  <Image
                    src="/assets/allies/fsb.png"
                    alt="FSB"
                    width={72}
                    height={30}
                    style={{ width: "auto", height: "28px", objectFit: "contain" }}
                  />
                </div>
              </a>

              <a
                href="https://caritaswestminster.org.uk/seeds-hub/"
                target="_blank"
                rel="noreferrer"
                className="footer-partner-card"
                title="Seeds Hub"
              >
                <div className="partner-logo-box">
                  <Image
                    src="/assets/allies/caritas.png"
                    alt="Caritas Westminster Seeds Hub"
                    width={104}
                    height={28}
                    style={{ width: "auto", height: "26px", objectFit: "contain" }}
                  />
                </div>
              </a>

              <a
                href="https://www.mohs10.io/"
                target="_blank"
                rel="noreferrer"
                className="footer-partner-card"
                title="MOHS10 Technologies"
              >
                <div className="partner-logo-box">
                  <Image
                    src="/assets/allies/mohs10.png"
                    alt="MOHS10 Technologies"
                    width={108}
                    height={26}
                    style={{ width: "auto", height: "24px", objectFit: "contain" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-compact-bottom">
          <div className="footer-bottom-item footer-bottom-copyright">
            <svg
              className="footer-bottom-icon mobile-only-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
            </svg>
            <span>© 2026 MySENn. All rights reserved.</span>
          </div>

          <div className="footer-bottom-item footer-bottom-disclaimer">
            <svg
              className="footer-bottom-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00c4cc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Support tool - not medical advice or an emergency service.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
