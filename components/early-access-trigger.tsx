"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export function EarlyAccessTrigger({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...props}
      type="button"
      onClick={(event) => {
        props.onClick?.(event);
        if (!event.defaultPrevented)
          window.dispatchEvent(new Event("mysenn:open-early-access"));
      }}
    >
      {children}
    </button>
  );
}
