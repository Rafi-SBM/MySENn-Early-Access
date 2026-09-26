"use client";

import { useState } from "react";
import "./faq-hub.module.css";

export type FaqItem = {
  question: string;
  answer: string;
  category: "getting-started" | "everyday" | "reports";
  categoryLabel: string;
  takeaway?: string;
};

export const allFaqs: FaqItem[] = [
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "What is MySENn?",
    answer:
      "MySENn helps SEN (Special Educational Needs) parents capture everyday moments, understand patterns, and build a clearer picture of their child’s unique journey without bureaucratic friction.",
    takeaway: "Designed by SEND parents to turn daily observations into actionable clarity.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "Who is MySENn for?",
    answer:
      "MySENn is designed for parents, carers, and families supporting children and young people with additional needs, including neurodivergence (Autism, ADHD), sensory processing differences, and complex learning profiles.",
    takeaway: "For any family navigating the UK SEND landscape seeking calm, organized context.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "What can I record?",
    answer:
      "You can record everyday behaviour, sensory triggers, sleep variations, wellbeing, medical appointments, medications, small wins, and moments of joy that traditional clinical forms miss.",
    takeaway: "Quick voice notes, text reflections, or tagged moments in under 30 seconds.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "Why should I record this information?",
    answer:
      "Small changes and environmental triggers can be easy to miss in the rush of daily life. Tracking moments over time reveals patterns that empower you during SENCO meetings and NHS assessments.",
    takeaway: "Removes the burden of having to remember months of history under appointment pressure.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "How do Smart Insights work?",
    answer:
      "MySENn connects entries across environments (home, school, therapies) to highlight trends and recurring triggers. It synthesises the bigger picture so you can advocate with confidence.",
    takeaway: "Connects isolated moments into a coherent narrative of your child’s needs.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "Does MySENn diagnose my child?",
    answer:
      "No. MySENn does not diagnose medical or developmental conditions. Its insights are designed strictly to support observation and evidence-based conversations between parents and certified professionals.",
    takeaway: "A communication companion for parents - not an automated medical diagnostic tool.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "Is MySENn a replacement for doctors or therapists?",
    answer:
      "No. MySENn supports parents and clinicians; it does not replace paediatric, therapeutic, or educational expertise. Your healthcare team remains in the lead.",
    takeaway: "Empowers the professionals supporting your child with rich, contextual history.",
  },
  {
    category: "getting-started",
    categoryLabel: "Getting Started",
    question: "Can I use MySENn for more than one child?",
    answer:
      "Yes. You can create completely distinct, secure profiles for each child you support, keeping their respective notes, timelines, and reports separate.",
    takeaway: "Full multi-child support under a single family account.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "Is my child’s information private and secure?",
    answer:
      "Absolutely. We treat special educational and developmental data with clinical-grade care. MySENn complies with UK GDPR and Data Protection Act 2018 standards. Your family's data is strictly encrypted and never sold to third parties.",
    takeaway: "100% parent-owned and encrypted to UK clinical confidentiality benchmarks.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "Can I share my child’s information with professionals?",
    answer:
      "Yes, on your terms. You can generate focused summaries or structured reports to share with SENCOs, speech therapists, or paediatricians. You have total granular control over what is shared.",
    takeaway: "You choose what to share, when to share it, and who receives it.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "Do I need to record something every day?",
    answer:
      "No! There is zero pressure to record daily. MySENn is built for real family life, not streak counters. Whether you record three times a week or once a fortnight, meaningful patterns still emerge.",
    takeaway: "No guilt, no streaks. Use it whenever something significant occurs.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "What if I miss a few days or weeks?",
    answer:
      "That is completely fine. MySENn exists to relieve pressure, not add another chore to your to-do list. Pick back up whenever you are ready without penalty.",
    takeaway: "Your child's timeline remains patient, waiting for your next observation.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "Can I add notes or voice recordings?",
    answer:
      "Yes. You can speak naturally into the app while doing the school run or cooking dinner. MySENn transcribes and organizes your voice reflections automatically into tagged moments.",
    takeaway: "Hands-free voice capture built for busy, multi-tasking parents.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "Can MySENn tell me what caused a behaviour?",
    answer:
      "MySENn identifies correlations and temporal patterns (e.g. sleep changes preceding sensory overload), but frames them as observations to explore with therapists - not definitive medical causation.",
    takeaway: "Provides hypotheses and observations for you and your care team to examine.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "What happens if I need urgent medical help?",
    answer:
      "MySENn is not an emergency service. If your child is seriously unwell or in immediate distress, always contact NHS 111, 999, or your local emergency department immediately.",
    takeaway: "Not for acute emergencies. Always contact NHS emergency services directly.",
  },
  {
    category: "everyday",
    categoryLabel: "Everyday & Privacy",
    question: "How do I get started?",
    answer:
      "Start small. Register for early access, create your child's profile, and record just one or two observations this week. The system will gently take care of the rest.",
    takeaway: "Begin with a single memory or note today.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "What does “Understand their world. Support their way.” mean?",
    answer:
      "Every neurodivergent child experiences the world uniquely. Instead of forcing children into rigid universal standards, MySENn helps you understand their individual sensory, emotional, and cognitive profile to shape support that truly fits them.",
    takeaway: "A child-first philosophy that celebrates individuality over conformity.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "What is the difference between Smart Insights and Reports?",
    answer:
      "Smart Insights provide instant, interactive views of recent trends directly on your phone for quick day-to-day understanding. Reports generate exportable, structured clinical summaries designed for formal EHCP reviews, SENCO meetings, and specialist appointments.",
    takeaway: "Smart Insights for everyday parenting; Reports for multi-agency meetings.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "Can I export or share Reports?",
    answer:
      "Yes. Reports can be downloaded as clean, beautifully formatted PDFs to print or email directly to your child’s educational psychologist, paediatrician, or school SENCO.",
    takeaway: "PDF exports formatted specifically for UK professional review.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "How are Reports created?",
    answer:
      "MySENn aggregates your recorded logs over a selected timeframe (e.g., past 30 days, term-time, or since medication change). It extracts key trends, triggers, and progress indicators into an objective document.",
    takeaway: "Transforms weeks of observations into a 2-page executive summary.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "Does the AI make decisions about my child?",
    answer:
      "Never. The AI acts only as a pattern-recognition and summarisation assistant. It highlights potential connections in your own data to save you time. You and your professionals retain 100% of the decision-making authority.",
    takeaway: "Human-led always. AI assists with note organisation, never clinical judgement.",
  },
  {
    category: "reports",
    categoryLabel: "Insights & Reports",
    question: "How does MySENn support EHCP annual reviews?",
    answer:
      "MySENn allows parents to export dated, environment-specific evidence showing how classroom acoustic adaptations, quiet lunch passes, and visual schedules impacted regulation. This provides clear factual evidence for Section F provision.",
    takeaway: "Concrete documentation for EHCP drafting, mediation, and Section F proof.",
  },
];

export function FaqHub() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(
    () => new Set([allFaqs[0].question])
  );

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  };

  const CATEGORY_SECTIONS = [
    { id: "getting-started", title: "Getting started" },
    { id: "everyday", title: "Everyday use & privacy" },
    { id: "reports", title: "Insights & reports" },
  ] as const;

  return (
    <div className="faq-hub-content reveal-up">
      {CATEGORY_SECTIONS.map((section) => (
        <section className="faq-category" key={section.id}>
          <h2>{section.title}</h2>
          <div className="faq-list">
            {allFaqs
              .filter((faq) => faq.category === section.id)
              .map((faq) => {
                const isOpen = openQuestions.has(faq.question);
                return (
                  <article
                    key={faq.question}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-q"
                      onClick={() => toggleQuestion(faq.question)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <i aria-hidden="true">+</i>
                    </button>
                    <div className="faq-a" aria-hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}

      <p className="small-note">
        If you need urgent medical help, MySENn is not an emergency service. Contact the appropriate emergency or healthcare service.
      </p>
    </div>
  );
}
