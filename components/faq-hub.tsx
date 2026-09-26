"use client";

import { useMemo, useState } from "react";

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
    takeaway: "A communication companion for parents — not an automated medical diagnostic tool.",
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
      "MySENn identifies correlations and temporal patterns (e.g. sleep changes preceding sensory overload), but frames them as observations to explore with therapists — not definitive medical causation.",
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

const CATEGORIES = [
  { id: "all", label: "All Questions", count: 22, icon: "❖" },
  { id: "getting-started", label: "Getting Started", count: 8, icon: "✦" },
  { id: "everyday", label: "Everyday & Privacy", count: 8, icon: "🛡" },
  { id: "reports", label: "Insights & Reports", count: 6, icon: "📊" },
] as const;

export function FaqHub() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "getting-started" | "everyday" | "reports"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(
    () => new Set([allFaqs[0].question])
  );

  const filteredFaqs = useMemo(() => {
    let result = allFaqs;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          (item.takeaway && item.takeaway.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

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

  const handleExpandAll = () => {
    setOpenQuestions(new Set(filteredFaqs.map((f) => f.question)));
  };

  const handleCollapseAll = () => {
    setOpenQuestions(new Set());
  };

  return (
    <div className="faq-interactive-hub">
      <div className="faq-hub-grid">
        <main className="faq-main-flow reveal-up">
          {/* Inline category tabs */}
          <div className="faq-category-tabs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`faq-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery("");
                  }}
                >
                  <span className="faq-tab-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="faq-search-card">
            <div className="faq-search-input-wrap">
              <span className="search-icon" aria-hidden="true">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Search questions (e.g. privacy, diagnosis, SENCO, reports)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results header */}
          <div className="faq-flow-header">
            <div>
              <h2 className="flow-title">
                {searchQuery
                  ? `Results for "${searchQuery}"`
                  : activeCategory === "all"
                  ? "All questions"
                  : activeCategory === "getting-started"
                  ? "Getting Started"
                  : activeCategory === "everyday"
                  ? "Everyday & Privacy"
                  : "Insights & Reports"}
              </h2>
            </div>

            <div className="faq-controls-row">
              <span className="faq-count-pill">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "question" : "questions"}
              </span>
              {filteredFaqs.length > 0 && (
                <div className="faq-expand-actions">
                  <button
                    type="button"
                    className="faq-action-link"
                    onClick={handleExpandAll}
                  >
                    Expand All
                  </button>
                  <span className="action-sep">·</span>
                  <button
                    type="button"
                    className="faq-action-link"
                    onClick={handleCollapseAll}
                  >
                    Collapse All
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Accordion */}
          {filteredFaqs.length === 0 ? (
            <div className="faq-empty-state">
              <span className="empty-icon" aria-hidden="true">🔍</span>
              <h3>No matching questions found</h3>
              <p>
                We couldn&apos;t find any answers matching &ldquo;{searchQuery}&rdquo;. Try a different search or reset filters.
              </p>
              <button
                type="button"
                className="button button-dark"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            <div className="faq-cards-stack">
              {filteredFaqs.map((faq) => {
                const isOpen = openQuestions.has(faq.question);
                return (
                  <article
                    key={faq.question}
                    className={`faq-card-item ${isOpen ? "is-expanded" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-card-header"
                      onClick={() => toggleQuestion(faq.question)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-header-left">
                        <span className={`faq-category-pill cat-${faq.category}`}>
                          {faq.categoryLabel}
                        </span>
                        <h3 className="faq-card-title">{faq.question}</h3>
                      </div>
                      <span className="faq-card-toggle" aria-hidden="true">
                        <span className="toggle-glyph">{isOpen ? "−" : "+"}</span>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-card-body">
                        <div className="faq-card-content">
                          <p>{faq.answer}</p>
                          {faq.takeaway && (
                            <div className="faq-takeaway-box">
                              <span className="takeaway-bullet">✓</span>
                              <div className="takeaway-copy">
                                <strong>Key Takeaway:</strong>
                                <span>{faq.takeaway}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>

      <div className="faq-assurance-banner reveal-up">
        <div className="assurance-col">
          <div className="assurance-icon-box">🛡</div>
          <strong>100% Parent Owned</strong>
          <p>Your child's observation logs are encrypted and never sold to third parties or data brokers.</p>
        </div>
        <div className="assurance-col">
          <div className="assurance-icon-box">🇬🇧</div>
          <strong>UK GDPR &amp; DPA 2018</strong>
          <p>Built strictly to UK data protection benchmarks with clinical-level confidentiality.</p>
        </div>
        <div className="assurance-col">
          <div className="assurance-icon-box">🩺</div>
          <strong>Observation Companion</strong>
          <p>Empowers professional conversations with SENCOs, GPs, and paediatricians without clinical pressure.</p>
        </div>
      </div>
    </div>
  );
}
