"use client";

import { EarlyAccessTrigger } from "@/components/early-access-trigger";

export function CommunityInteractive() {
  return (
    <>
      <section className="inner-hero community-hero">
        <div className="page-shell reveal-up">
          <div className="section-tag">
            <span className="tag-spark" aria-hidden="true">✦</span>
            Lived wisdom community
          </div>
          <h1 className="heading-lines">
            <span>Sometimes the useful thing</span>
            <span>is hearing “us too.”</span>
          </h1>
          <p className="hero-support">
            A calm space for SEN parents to explore small, practical everyday adjustments that genuinely helped other families. No toxic comparison, no clinical claims — just honest lived wisdom.
          </p>

          <div className="community-metric-strip" aria-label="Community impact stats">
            <div className="community-stat">
              <span className="stat-number">140+</span>
              <span className="stat-label">Lived Strategies</span>
            </div>
            <div className="community-stat-divider" aria-hidden="true">/</div>
            <div className="community-stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Daily Scenarios</span>
            </div>
            <div className="community-stat-divider" aria-hidden="true">/</div>
            <div className="community-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Parent-Verified</span>
            </div>
            <div className="community-stat-divider" aria-hidden="true">/</div>
            <div className="community-stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Performative Pressure</span>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="page-shell community-head">
          <div>
            <div className="section-tag inverse">Coming soon</div>
            <h2>What helped?</h2>
          </div>
          <p>
            A future community space for sharing practical ideas that made everyday moments a little easier. Not prescriptions. Not promises. Just lived experience that may help another family find a starting point.
          </p>
        </div>

        <div className="community-loop" aria-hidden="true">
          <div className="community-track">
            <span>Transitions</span>
            <span>Bedtime</span>
            <span>School mornings</span>
            <span>Sensory moments</span>
            <span>Appointments</span>
            <span>Communication</span>
            <span>Transitions</span>
            <span>Bedtime</span>
          </div>
        </div>

        <div className="page-shell helped-grid">
          <div className="what-helped">
            <span className="coming-pill">Idea preview</span>
            <h3>A tiny thing that helped.</h3>
            <p>
              Parents could share a short story, tag the situation and explain what made a difference for their child.
            </p>
            <div className="helped-example">
              <div className="helped-avatar">M</div>
              <div>
                <small>A parent shared</small>
                <p>
                  &ldquo;Giving a five-minute warning with a picture of where we were going made leaving the park gentler for us.&rdquo;
                </p>
                <span>Transitions · visual support</span>
              </div>
            </div>
          </div>

          <div className="helped-question">
            <span>The community is still being shaped.</span>
            <strong>Help shape what belongs here.</strong>
            <EarlyAccessTrigger className="button button-light magnetic">
              <span>Join early access</span> <i>↗</i>
            </EarlyAccessTrigger>
          </div>
        </div>
      </section>

      <section className="safe-harbor-section content-section white">
        <div className="page-shell">
          <div className="safe-harbor-head reveal-up">
            <div className="section-tag">
              <span className="tag-spark" aria-hidden="true">✦</span>
              Our Safe Harbor Promise
            </div>
            <h2 className="heading-lines">
              <span>No pressure to have</span>
              <span>the perfect answer.</span>
            </h2>
            <p className="safe-harbor-sub">
              A calm space built on authentic lived experience, respectful boundaries, and shared humanity.
            </p>
          </div>

          <div className="safe-harbor-matrix reveal-up">
            <div className="harbor-card harbor-never">
              <div className="harbor-card-header">
                <div>
                  <h3>What it won&apos;t be</h3>
                  <span>Strict boundaries we will never cross</span>
                </div>
              </div>
              <ul className="harbor-list">
                <li>
                  <div className="list-title">
                    <span className="bullet-cross">✕</span>
                    <strong>No clinical dictates</strong>
                  </div>
                  <p>We will never diagnose, prescribe, or pretend to replace qualified medical and educational professionals.</p>
                </li>
                <li>
                  <div className="list-title">
                    <span className="bullet-cross">✕</span>
                    <strong>No toxic comparison</strong>
                  </div>
                  <p>No performative parenting, aesthetic perfection, or pressure to keep up. Real SEND life is messy.</p>
                </li>
                <li>
                  <div className="list-title">
                    <span className="bullet-cross">✕</span>
                    <strong>No unsolicited advice</strong>
                  </div>
                  <p>Advice without context can harm. We share lived perspectives, not rigid commands on what you should do.</p>
                </li>
              </ul>
            </div>

            <div className="harbor-card harbor-always">
              <div className="harbor-card-header">
                <div>
                  <h3>What you can always count on</h3>
                  <span>Our commitment to every family</span>
                </div>
              </div>
              <ul className="harbor-list">
                <li>
                  <div className="list-title">
                    <span className="bullet-check">✓</span>
                    <strong>Real lived realities</strong>
                  </div>
                  <p>Honest reflections from parents who have lived the SEN journey and understand the emotional weight.</p>
                </li>
                <li>
                  <div className="list-title">
                    <span className="bullet-check">✓</span>
                    <strong>Context that travels</strong>
                  </div>
                  <p>Observations structured to help you advocate clearly and save time in appointments with doctors and SENCOs.</p>
                </li>
                <li>
                  <div className="list-title">
                    <span className="bullet-check">✓</span>
                    <strong>Complete parent agency</strong>
                  </div>
                  <p>You decide what to read, what to share, and what to keep private. You are the expert on your child.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="clinical-harbor-seal reveal-up">
            <div>
              <strong>UK Clinical &amp; Professional Safe Harbor</strong>
              <p>
                MySENn is a communication and observational companion, not a medical diagnostic tool.
                Clinical, therapeutic, and diagnostic decisions always remain strictly with your healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
