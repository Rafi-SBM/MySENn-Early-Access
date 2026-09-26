"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./early-access.module.css";

export function EarlyAccess({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("modal-open");
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 180);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop show"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={modalRef}
        className="access-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="access-title"
      >
        <button
          ref={closeRef}
          className="modal-close"
          type="button"
          aria-label="Close early access"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-copy">
          <div className="section-tag">Early access</div>
          <h2 id="access-title">Be part of MySENn.</h2>
          <p>
            Early access is currently open to parents and carers. Explore a
            simpler way to capture, connect and understand your child&apos;s
            journey.
          </p>
          <div className="access-audience" aria-label="Early access audience">
            <span>Currently available for</span>
            <strong>Parents &amp; carers</strong>
          </div>
          <p className="access-scan-note">
            Scan the code to open the parent and carer early-access page.
          </p>
        </div>

        <div className="qr-panel">
          <a
            className="qr-link"
            href="https://scan.page/p48EPX"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the parent and carer early access sign-up"
          >
            <Image
              src="/assets/early-access-qr.png"
              alt="QR code for MySENn parent and carer early access"
              width={210}
              height={210}
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <b>Scan to join early access</b>
          <span>Parents &amp; carers</span>
        </div>
      </section>
    </div>
  );
}
