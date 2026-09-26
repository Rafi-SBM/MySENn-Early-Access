"use client";

import { useState } from "react";
import "./faq-list.module.css";

export type Faq = { question: string; answer: string; topic?: string };

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <article
            className={`faq-item${isOpen ? " open" : ""}`}
            key={item.question}
          >
            {item.topic && <span className="faq-topic">{item.topic}</span>}
            <button
              className="faq-q"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <i aria-hidden="true">+</i>
            </button>
            <div className="faq-a" aria-hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
