"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    label: "CAMHS",
    copy: "Another appointment. Another room. Another version of the same history.",
    question: "Tell me what's been happening.",
  },
  {
    label: "School",
    copy: "You try to explain what mornings are really like before the school gate.",
    question: "Can you take us back to the beginning?",
  },
  {
    label: "Therapist",
    copy: "You search your phone for the note you made two weeks ago.",
    question: "When did that start?",
  },
  {
    label: "A new professional",
    copy: "And once again you wonder: have I told them everything?",
    question: "Could you talk us through their history?",
  },
] as const;

export function StorySequence() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const updateActiveStage = () => {
      const section = sectionRef.current;
      const stageElements = refs.current.filter(
        (stage): stage is HTMLElement => stage !== null,
      );
      if (!section || stageElements.length === 0) return;

      const sectionBounds = section.getBoundingClientRect();
      if (
        sectionBounds.bottom < window.innerHeight * 0.25 ||
        sectionBounds.top > window.innerHeight * 0.8
      ) {
        return;
      }

      const targetY = window.innerHeight * 0.52;
      let nextActive = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      stageElements.forEach((stage, index) => {
        const bounds = stage.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - targetY);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextActive = index;
        }
      });

      if (activeRef.current === nextActive) return;
      activeRef.current = nextActive;
      setActive(nextActive);

      if (quoteRef.current && quoteRef.current.animate) {
        quoteRef.current.animate(
          [
            { opacity: 0.2, transform: "translateY(5px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 320, easing: "ease-out" },
        );
      }
    };

    updateActiveStage();
    window.addEventListener("scroll", updateActiveStage, { passive: true });
    window.addEventListener("resize", updateActiveStage, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveStage);
      window.removeEventListener("resize", updateActiveStage);
    };
  }, []);

  return (
    <section className="story-pain" id="why" data-story-section ref={sectionRef}>
      <div className="page-shell pain-grid">
        <div className="pain-sticky">
          <div className="section-tag inverse">
            The repeated story
          </div>
          <h2 className="heading-lines">
            <span>How many times have</span>
            <span>you told the same story?</span>
          </h2>
          <div className="repeated-question" aria-live="polite">
            <span>“</span>
            <b data-story-quote ref={quoteRef}>{stages[active].question}</b>
            <span>”</span>
          </div>
          <div className="pain-meter">
            <span
              data-pain-progress
              style={{ width: `${((active + 1) / stages.length) * 100}%` }}
            />
          </div>
          <div className="pain-count">
            <b data-pain-count>{String(active + 1).padStart(2, "0")}</b>
            <span>of 04 conversations</span>
          </div>
        </div>
        <div className="story-stages">
          {stages.map((stage, index) => (
            <article
              className={`story-stage${active === index ? " is-active" : ""}`}
              data-story-stage
              data-label={stage.label}
              key={stage.label}
              ref={(element) => {
                refs.current[index] = element;
              }}
            >
              <span className="stage-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{stage.label}</strong>
                <p>
                  {index === stages.length - 1 ? (
                    <>
                      And once again you wonder:{" "}
                      <em>have I told them everything?</em>
                    </>
                  ) : (
                    stage.copy
                  )}
                </p>
              </div>
              <div className="stage-bubble">{stage.question}</div>
            </article>
          ))}
        </div>
      </div>
      <div className="paper-trail" aria-hidden="true">
        {[
          "WhatsApp",
          "old email",
          "school report",
          "phone note",
          "calendar",
          "voice memo",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
