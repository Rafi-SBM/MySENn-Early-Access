"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SiteEffects() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<number | undefined>(undefined);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const cookieTimer = window.setTimeout(() => {
      try {
        setCookieVisible(!window.localStorage.getItem("mysenn-cookie-choice"));
      } catch {}
    }, 900);

    const updateProgress = () => {
      const maximum =
        document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.width = `${maximum > 0 ? (window.scrollY / maximum) * 100 : 0}%`;
    };

    const moveAura = (event: PointerEvent) => {
      if (!auraRef.current || event.pointerType === "touch") return;
      auraRef.current.style.left = `${event.clientX}px`;
      auraRef.current.style.top = `${event.clientY}px`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    if (finePointer && !reducedMotion) {
      window.addEventListener("pointermove", moveAura, { passive: true });
    }

    const cleanups: Array<() => void> = [];

    const revealEls = document.querySelectorAll<HTMLElement>(
      ".reveal-up, .reveal-words, .help-step"
    );
    if ("IntersectionObserver" in window && !reducedMotion) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("revealed"));
    }
    if (finePointer && !reducedMotion) {
      document
        .querySelectorAll<HTMLElement>("[data-parallax-zone]")
        .forEach((zone) => {
          const move = (event: PointerEvent) => {
            const bounds = zone.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            zone
              .querySelectorAll<HTMLElement>("[data-depth]")
              .forEach((item) => {
                const depth = Number(item.dataset.depth ?? 10);
                item.style.translate = `${x * depth}px ${y * depth}px`;
              });
          };
          const reset = () => {
            zone
              .querySelectorAll<HTMLElement>("[data-depth]")
              .forEach((item) => {
                item.style.translate = "";
              });
          };
          zone.addEventListener("pointermove", move, { passive: true });
          zone.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            zone.removeEventListener("pointermove", move);
            zone.removeEventListener("pointerleave", reset);
          });
        });

      document
        .querySelectorAll<HTMLElement>(".tilt-card, .magnetic")
        .forEach((item) => {
          const move = (event: PointerEvent) => {
            const bounds = item.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            item.style.transform = item.classList.contains("tilt-card")
              ? `perspective(900px) rotateY(${x * 4}deg) rotateX(${y * -4}deg) translateY(-2px)`
              : `translate(${x * 12}px, ${y * 12}px)`;
          };
          const reset = () => {
            item.style.transform = "";
          };
          item.addEventListener("pointermove", move, { passive: true });
          item.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            item.removeEventListener("pointermove", move);
            item.removeEventListener("pointerleave", reset);
          });
        });
    }

    document
      .querySelectorAll<HTMLElement>("[data-drag-scroll]")
      .forEach((scroller) => {
        let active = false;
        let startX = 0;
        let startScroll = 0;
        const down = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          active = true;
          startX = event.clientX;
          startScroll = scroller.scrollLeft;
          scroller.setPointerCapture?.(event.pointerId);
        };
        const move = (event: PointerEvent) => {
          if (active)
            scroller.scrollLeft = startScroll - (event.clientX - startX);
        };
        const stop = () => {
          active = false;
        };
        scroller.addEventListener("pointerdown", down);
        scroller.addEventListener("pointermove", move);
        scroller.addEventListener("pointerup", stop);
        scroller.addEventListener("pointercancel", stop);
        cleanups.push(() => {
          scroller.removeEventListener("pointerdown", down);
          scroller.removeEventListener("pointermove", move);
          scroller.removeEventListener("pointerup", stop);
          scroller.removeEventListener("pointercancel", stop);
        });
      });

    const heroTitle = document.querySelector<HTMLElement>(".hero-title");
    const titleTimer = window.setTimeout(
      () => heroTitle?.classList.add("loaded"),
      reducedMotion ? 0 : 120
    );

    const showToast = (event: Event) => {
      const message = (event as CustomEvent<string>).detail;
      if (!message) return;
      setToast(message);
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = window.setTimeout(() => setToast(""), 3200);
    };
    window.addEventListener("mysenn:toast", showToast);

    return () => {
      window.clearTimeout(cookieTimer);
      window.clearTimeout(titleTimer);
      window.clearTimeout(toastTimerRef.current);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", moveAura);
      window.removeEventListener("mysenn:toast", showToast);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  function chooseCookies(choice: "essential" | "all") {
    window.localStorage.setItem("mysenn-cookie-choice", choice);
    setCookieVisible(false);
    window.dispatchEvent(
      new CustomEvent("mysenn:toast", {
        detail:
          choice === "all"
            ? "Cookie preferences saved."
            : "Essential cookies only.",
      }),
    );
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <div className="cursor-aura" ref={auraRef} aria-hidden="true" />
      <aside
        className={`cookie-banner${cookieVisible ? " show" : ""}`}
        aria-label="Cookie preferences"
      >
        <p>
          We use essential cookies and, with your choice, analytics cookies to
          improve the website. <Link href="/cookie-policy">Cookie policy</Link>
        </p>
        <div>
          <button type="button" onClick={() => chooseCookies("essential")}>
            Essential only
          </button>
          <button
            className="accept"
            type="button"
            onClick={() => chooseCookies("all")}
          >
            Accept all
          </button>
        </div>
      </aside>
      <div
        className={`toast${toast ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}
