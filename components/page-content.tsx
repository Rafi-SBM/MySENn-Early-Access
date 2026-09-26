import Image from "next/image";
import Link from "next/link";
import { EarlyAccessTrigger } from "./early-access-trigger";
import { FaqList, type Faq } from "./faq-list";
import { FaqHub } from "./faq-hub";
import { StorySequence } from "./story-sequence";
import { VoiceDemo } from "./voice-demo";
import { HowItHelpsInteractive } from "./how-it-helps-interactive";
import { CommunityInteractive } from "./community-interactive";

const photo = {
  family:
    "https://images.pexels.com/photos/10565584/pexels-photo-10565584.jpeg?cs=srgb&dl=pexels-rdne-10565584.jpg&fm=jpg",
  play: "https://images.pexels.com/photos/12788416/pexels-photo-12788416.jpeg?cs=srgb&dl=pexels-mizunokozuki-12788416.jpg&fm=jpg",
  paint:
    "https://images.pexels.com/photos/3933259/pexels-photo-3933259.jpeg?cs=srgb&dl=pexels-tatianasyrikova-3933259.jpg&fm=jpg",
  calm: "https://images.pexels.com/photos/10566469/pexels-photo-10566469.jpeg?cs=srgb&dl=pexels-rdne-10566469.jpg&fm=jpg",
};

const homeFaqs: Faq[] = [
  {
    topic: "Getting started",
    question: "What is MySENn?",
    answer:
      "MySENn helps SEN parents capture everyday moments, understand patterns and build a clearer picture of their child's journey.",
  },
  {
    topic: "Understanding",
    question: "Does MySENn diagnose my child?",
    answer:
      "No. MySENn does not diagnose medical or developmental conditions. Its insights are designed to support observation and conversations with parents and professionals.",
  },
  {
    topic: "Everyday use",
    question: "Do I need to record something every day?",
    answer:
      "No. There is no pressure to record everything. Record what feels useful to you. Even small entries can become meaningful when viewed over time.",
  },
  {
    topic: "Sharing",
    question: "Can I share information with professionals?",
    answer:
      "MySENn is designed to help you organise information that you may choose to discuss or share with professionals. You remain in control of your information.",
  },
];

export function HomeContent() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-haze haze-one" aria-hidden="true" />
        <div className="hero-haze haze-two" aria-hidden="true" />
        <div className="hero-shell page-shell">
          <div className="hero-copy">
            <div className="kicker reveal-words">
              Built for families
            </div>
            <h1 className="hero-title" data-split>
              <span className="split-word">You</span>{" "}
              <span className="split-word">shouldn&apos;t</span>{" "}
              <span className="split-word">have</span>{" "}
              <span className="split-word">to</span>{" "}
              <span className="split-word">keep</span>{" "}
              <span className="split-word">explaining</span>{" "}
              <em>
                <span className="split-word">your</span>{" "}
                <span className="split-word">child.</span>
              </em>
            </h1>
            <p className="hero-lede reveal-up">
              The appointments. The meltdowns. The small wins. The things that
              helped. The things nobody else sees.
            </p>
            <p className="hero-support reveal-up">
              MySENn gives everyday moments one calm place, so your child&apos;s
              story is ready when you need it.
            </p>
            <div className="hero-cta reveal-up">
              <EarlyAccessTrigger className="button button-dark magnetic">
                <span>Get early access</span>
                <i>↗</i>
              </EarlyAccessTrigger>
              <Link className="text-link" href="#why">
                Start with the story <span>↓</span>
              </Link>
            </div>
            <div className="hero-gdpr-card reveal-up">
              <div className="hero-gdpr-seal-wrap">
                <Image
                  src="/assets/acorn-gdpr-compliant.jpg"
                  alt="Acorn Compliance"
                  width={46}
                  height={46}
                  className="hero-acorn-badge-img"
                />
              </div>
              <div className="hero-gdpr-text">
                <div className="gdpr-tag-row">
                  <span className="gdpr-beacon" />
                  <span className="gdpr-tag">UK GDPR COMPLIANT</span>
                </div>
                <strong>Assured by Acorn Compliance</strong>
              </div>
            </div>
          </div>

          <div
            className="memory-world"
            data-parallax-zone
            aria-label="Illustration of everyday memories coming together"
          >
            <div className="memory-orbit orbit-a" aria-hidden="true" />
            <div className="memory-orbit orbit-b" aria-hidden="true" />
            <div className="memory-core" data-depth="5">
              <div className="core-face" aria-hidden="true">
                <span className="eye eye-left" />
                <span className="eye eye-right" />
                <span className="blush blush-left" />
                <span className="blush blush-right" />
                <i className="mouth" />
              </div>
              <div className="core-text">
                <strong className="core-heading">One child.</strong>
                <span className="core-sub">One whole story.</span>
              </div>
            </div>
            <article className="memory-card mem-one" data-depth="17">
              <div className="memory-card-header">
                <span className="memory-time">7:42am</span>
                <i className="scribble coral" aria-hidden="true" />
              </div>
              <strong>A hard start.</strong>
              <p>The uniform felt impossible today.</p>
            </article>
            <article className="memory-card mem-two" data-depth="11">
              <div className="memory-card-header">
                <span className="memory-time">10:18am</span>
                <i className="scribble sky" aria-hidden="true" />
              </div>
              <strong>A small win.</strong>
              <p>Joined the class after a quiet reset.</p>
            </article>
            <article className="memory-card mem-three" data-depth="20">
              <div className="memory-card-header">
                <span className="memory-time">3:35pm</span>
                <i className="scribble mint" aria-hidden="true" />
              </div>
              <strong>Something helped.</strong>
              <p>Headphones made the journey home easier.</p>
            </article>
            <article className="memory-card mem-four" data-depth="13">
              <div className="memory-card-header">
                <span className="memory-time">2:07am</span>
                <i className="scribble yellow" aria-hidden="true" />
              </div>
              <strong>Sleep changed.</strong>
              <p>Another wake-up after a busy day.</p>
            </article>
            <div className="loose-note note-a" data-depth="25">
              school email
            </div>
            <div className="loose-note note-b" data-depth="22">
              voice note
            </div>
            <div className="loose-note note-c" data-depth="30">
              appointment
            </div>
            <svg
              className="hero-thread"
              viewBox="0 0 640 620"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M66 235C141 128 246 149 285 221C336 313 444 145 568 204C694 264 543 424 415 382C309 348 254 510 95 440"
                pathLength="1"
              />
            </svg>
          </div>
        </div>
        <div className="hero-bottom page-shell">
          <span className="hero-small">
            For parents and carers supporting children and young people with
            additional needs.
          </span>
          <span className="hero-scroll">
            Scroll to see why <i>↓</i>
          </span>
        </div>
      </section>

      <section className="human-gallery" aria-labelledby="human-gallery-title">
        <div className="page-shell human-gallery-head">
          <div>
            <div className="section-tag">Before the app, there is life</div>
            <h2 id="human-gallery-title" className="heading-lines">
              <span>The story lives in</span>
              <span>ordinary moments.</span>
            </h2>
          </div>
          <p>
            The morning that felt impossible. The quiet reset that worked. The
            unexpected laugh. The tiny change you only notice because you know
            them so well.
          </p>
        </div>
        <div className="page-shell human-photo-grid">
          <figure className="human-photo human-photo-wide">
            <Image
              src={photo.family}
              alt="Father and daughter laughing together at home"
              width={900}
              height={620}
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <figcaption>
              <span>07:42</span>
              <strong>
                Not every important moment happens in an appointment.
              </strong>
            </figcaption>
          </figure>
          <figure className="human-photo human-photo-tall">
            <Image
              src={photo.play}
              alt="Mother and child playing together at home"
              width={640}
              height={880}
              sizes="(max-width: 760px) 100vw, 36vw"
            />
            <figcaption>
              <span>10:18</span>
              <strong>
                The things that help can look beautifully ordinary.
              </strong>
            </figcaption>
          </figure>
          <figure className="human-photo human-photo-small">
            <Image
              src={photo.paint}
              alt="Father and daughter painting a cardboard house together"
              width={620}
              height={440}
              sizes="(max-width: 760px) 100vw, 34vw"
            />
            <figcaption>
              <span>15:31</span>
              <strong>A small win can be the whole day.</strong>
            </figcaption>
          </figure>
          <div className="human-gallery-note">
            <span>23 hours</span>
            <p>between appointments, life keeps giving you clues.</p>
            <i>↘</i>
          </div>
        </div>
      </section>

      <StorySequence />

      <section className="between" aria-labelledby="between-title">
        <div className="page-shell between-head">
          <div>
            <div className="section-tag">The 23 hours nobody sees</div>
            <h2 id="between-title">
              Because you know your child better than anyone.
            </h2>
          </div>
          <p>
            You see the changes. The patterns. The triggers. The tiny
            improvements. What makes things harder. What helps them regulate.
            But those moments are scattered across everyday life.
          </p>
        </div>
        <div className="moment-ribbon" data-drag-scroll>
          <article className="moment-card moment-large coral-card tilt-card">
            <span>07:12</span>
            <h3>The sock seam became the whole morning.</h3>
            <p>Not “bad behaviour”. A sensory moment worth remembering.</p>
            <div className="moment-doodle squiggle" />
          </article>
          <article className="moment-card sky-card tilt-card">
            <span>10:44</span>
            <h3>They went back into class.</h3>
            <p>Five quiet minutes. Headphones. Then ready.</p>
            <div className="moment-icon">↗</div>
          </article>
          <article className="moment-card photo-card tilt-card">
            <Image
              className="moment-photo"
              src={photo.calm}
              alt="Child resting with headphones in a calm home setting"
              width={680}
              height={460}
              sizes="320px"
            />
            <span>15:31</span>
            <h3>The car was the safe place today.</h3>
            <p>One sentence that might matter later.</p>
          </article>
          <article className="moment-card yellow-card tilt-card">
            <span>18:08</span>
            <h3>A food they usually avoid was okay.</h3>
            <p>Small changes can be easy to miss.</p>
            <div className="moment-doodle dots" />
          </article>
          <article className="moment-card mint-card moment-large tilt-card">
            <span>21:16</span>
            <h3>You knew something had changed.</h3>
            <p>You just couldn&apos;t explain exactly what — yet.</p>
            <div className="mini-chart">
              {Array.from({ length: 6 }, (_, chart) => (
                <i key={chart} />
              ))}
            </div>
          </article>
        </div>
        <div className="page-shell bring-together reveal-up">
          <p>MySENn helps bring those moments together.</p>
          <svg viewBox="0 0 240 36" aria-hidden="true">
            <path d="M4 25C64 5 153 39 235 11" pathLength="1" />
          </svg>
        </div>
      </section>

      <section className="product-reveal" id="how">
        <div className="page-shell product-intro">
          <div className="product-copy reveal-up">
            <div className="section-tag inverse">Only then, the technology</div>
            <h2>
              Captured.<br />
              Understood.<br />
              <span>Connected.</span>
            </h2>
            <p>
              Speak naturally, save what happened and build a clearer picture of
              your child&apos;s world over time.
            </p>
            <p className="quiet-line">
              No forms to catch up on. Just the context you want to keep.
            </p>
            <Link className="button button-light magnetic" href="/how-it-helps">
              <span>Explore how it helps</span> <i>↗</i>
            </Link>
          </div>

          <VoiceDemo />
        </div>

        <div className="page-shell help-stack">
          <article className="help-step reveal-up">
            <div className="help-num">01</div>
            <div className="help-copy">
              <span>Save a moment</span>
              <h3>Hold onto everyday details.</h3>
            </div>
            <div className="help-visual capture-visual" aria-hidden="true">
              <div className="capture-ambient-glow" />
              <div className="capture-audio-core">
                <div className="capture-mic-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                  </svg>
                  <span className="audio-ring-wave ring-1" />
                  <span className="audio-ring-wave ring-2" />
                </div>
                <div className="capture-eq-bars">
                  <span style={{ height: "35%", animationDelay: "0.05s" }} />
                  <span style={{ height: "70%", animationDelay: "0.15s" }} />
                  <span style={{ height: "50%", animationDelay: "0.25s" }} />
                  <span style={{ height: "90%", animationDelay: "0.1s" }} />
                  <span style={{ height: "65%", animationDelay: "0.3s" }} />
                  <span style={{ height: "100%", animationDelay: "0.2s" }} />
                  <span style={{ height: "75%", animationDelay: "0.35s" }} />
                  <span style={{ height: "45%", animationDelay: "0.12s" }} />
                  <span style={{ height: "80%", animationDelay: "0.28s" }} />
                  <span style={{ height: "60%", animationDelay: "0.18s" }} />
                </div>
              </div>
              <div className="capture-floating-chips">
                <span className="live-chip chip-1">
                  <i className="chip-dot-green" /> 12s Voice Note
                </span>
                <span className="live-chip chip-2">
                  ✦ Sensory reset worked
                </span>
              </div>
            </div>
          </article>
          <article className="help-step reveal-up">
            <div className="help-num">02</div>
            <div className="help-copy">
              <span>Notice patterns</span>
              <h3>Connect experiences into patterns.</h3>
            </div>
            <div className="help-visual pattern-visual" aria-hidden="true">
              <div className="pattern-ambient-glow" />
              <div className="pattern-radar-sweep" />
              <svg className="pattern-trend-svg" viewBox="0 0 320 160">
                <defs>
                  <linearGradient id="patternAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="patternLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <path
                  className="trend-area"
                  d="M20 120 Q60 110 90 65 T170 85 T240 35 T300 50 L300 150 L20 150 Z"
                  fill="url(#patternAreaGrad)"
                />
                <path
                  className="trend-line"
                  d="M20 120 Q60 110 90 65 T170 85 T240 35 T300 50"
                  fill="none"
                  stroke="url(#patternLineGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle className="pattern-node n1" cx="90" cy="65" r="5" />
                <circle className="pattern-node n2" cx="170" cy="85" r="5" />
                <circle className="pattern-node n3" cx="240" cy="35" r="6" />
                <circle className="pattern-node n4" cx="300" cy="50" r="5" />
              </svg>
              <div className="pattern-insight-badge">
                <span className="insight-spark">✦ Pattern identified</span>
                <strong>Tuesday masking fallout after assembly</strong>
              </div>
            </div>
          </article>
          <article className="help-step reveal-up">
            <div className="help-num">03</div>
            <div className="help-copy">
              <span>Share context</span>
              <h3>Bring clarity to meetings.</h3>
            </div>
            <div className="help-visual report-deck-visual" aria-hidden="true">
              <div className="report-deck-card">
                <div className="deck-card-head">
                  <div className="deck-doc-title">
                    <span className="deck-tag">14-DAY SUMMARY</span>
                    <strong>SENCO &amp; Clinical Brief</strong>
                  </div>
                  <span className="deck-status-badge">✓ Ready to share</span>
                </div>
                <div className="deck-metrics-row">
                  <div className="deck-metric">
                    <div className="metric-bar-wrap">
                      <span className="metric-fill-bar bar-sensory" />
                    </div>
                    <small>Sensory</small>
                  </div>
                  <div className="deck-metric">
                    <div className="metric-bar-wrap">
                      <span className="metric-fill-bar bar-sleep" />
                    </div>
                    <small>Sleep</small>
                  </div>
                  <div className="deck-metric">
                    <div className="metric-bar-wrap">
                      <span className="metric-fill-bar bar-triggers" />
                    </div>
                    <small>Triggers</small>
                  </div>
                  <div className="deck-metric">
                    <div className="metric-bar-wrap">
                      <span className="metric-fill-bar bar-wins" />
                    </div>
                    <small>Wins</small>
                  </div>
                </div>
                <div className="deck-callout-pill">
                  <span>92% calmer with pre-transition visual cue</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="page-shell clinical-note">
          MySENn supports observation and conversations. It does not diagnose
          conditions or replace medical, therapeutic or professional advice.
        </div>
      </section>

      <section className="story-section story-origin" id="story">
        <div className="page-shell story-origin-shell">
          <div className="story-origin-copy reveal-up">
            <div className="section-tag">Our story</div>
            <h2>
              Began as a <em>parent story.</em>
            </h2>
            <p className="story-origin-lede">
              MySENn was founded by Pallavi Deshpande — a technology leader with 20+ years of experience, and a parent who has lived the SEND journey first-hand.
            </p>
            <p>
              After living the daily reality of noticing subtle shifts, tracking appointments and repeatedly telling the same history to different professionals, the purpose became simple: give families a calmer, more dignified way to carry their child&apos;s story.
            </p>
            <blockquote>
              “So other families don&apos;t have to repeat the same struggle.”
            </blockquote>
            <Link className="button button-dark magnetic" href="/our-story">
              <span>Read Pallavi&apos;s story</span> <i>↗</i>
            </Link>
          </div>

          <div
            className="story-origin-visual"
            aria-label="The principles behind MySENn"
          >
            <figure className="origin-founder-card">
              <div className="origin-photo-wrap">
                <Image
                  src="/assets/Founder.jpeg"
                  alt="Pallavi Deshpande, founder of MySENn"
                  width={544}
                  height={854}
                />
              </div>
              <figcaption>
                <span className="founder-kicker">Founder · Lived Experience</span>
                <strong className="founder-name">Pallavi Deshpande</strong>
                <small className="founder-cred">Technology leader · parent · lived experience</small>
              </figcaption>
            </figure>
            <div className="origin-principles-stack">
              <article className="origin-principle origin-one">
                <span className="principle-big-num">01</span>
                <div className="principle-content">
                  <strong>Built from lived experience.</strong>
                  <p>Start with what families actually carry.</p>
                </div>
              </article>
              <article className="origin-principle origin-two">
                <span className="principle-big-num">02</span>
                <div className="principle-content">
                  <strong>Shaped by parents.</strong>
                  <p>Listen before deciding what matters.</p>
                </div>
              </article>
              <article className="origin-principle origin-three">
                <span className="principle-big-num">03</span>
                <div className="principle-content">
                  <strong>Learning Through Life.</strong>
                  <p>Keep learning with families as life changes.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-teaser">
        <div className="page-shell faq-layout">
          <div className="faq-intro">
            <div className="section-tag">Clear answers</div>
            <h2>Things parents ask us.</h2>
            <p>
              Clear answers about what MySENn is, what it isn&apos;t, privacy,
              reports and everyday use.
            </p>
            <Link className="button button-dark magnetic" href="/faq">
              <span>See all FAQs</span> <i>↗</i>
            </Link>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>
    </>
  );
}

export function HowItHelpsContent() {
  return <HowItHelpsInteractive />;
}

export function OurStoryContent() {
  return (
    <>
      <section className="story-hero-section">
        <div className="page-shell story-hero-grid">
          <div className="story-hero-copy reveal-up">
            <div className="section-tag story-badge">
              <span className="tag-spark" aria-hidden="true">✦</span>
              Our story · The founder
            </div>

            <h1 className="story-hero-title heading-lines">
              <span>One parent.</span>
              <span>One simple purpose.</span>
            </h1>

            <p className="story-hero-lede">
              Making sure a child’s story travels with them — not on their parents’ shoulders.
            </p>

            <p className="story-hero-intro">
              Founded by <strong>Pallavi Deshpande</strong> after years of navigating the UK SEND system and living through the exhaustion of repeating the exact same history across doctors, therapists, and schools.
            </p>

            <div className="story-pullquote-card">
              <div className="pullquote-symbol" aria-hidden="true">
                “
              </div>
              <blockquote>
                “So other families don&apos;t have to struggle in the same way.”
              </blockquote>
              <div className="pullquote-author">
                <strong>Pallavi Deshpande</strong>
                <span>Founder of MySENn · SEND Parent</span>
              </div>
            </div>
          </div>

          <div
            className="story-hero-visual reveal-up"
            aria-label="Founder portrait of Pallavi Deshpande"
          >
            <div className="founder-portrait-frame tilt-card">
              <div className="founder-portrait-inner">
                <Image
                  src="/assets/Founder.jpeg"
                  alt="Pallavi Deshpande, Founder of MySENn"
                  width={544}
                  height={854}
                  priority
                  className="founder-portrait-img"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="story-principles-section content-section white">
        <div className="page-shell">
          <div className="story-principles-header reveal-up">
            <div>
              <div className="section-tag">How it is growing</div>
              <h2>Listening first.</h2>
            </div>
            <p className="story-principles-lead">
              What started with one parent&apos;s experience has evolved by
              listening to many more.
            </p>
          </div>
          <div className="principles-grid">
            <article className="principle-card reveal-up">
              <span className="principle-num">01</span>
              <h3>Built from lived experience.</h3>
              <p>
                The starting point is what family life actually feels like, not
                what a feature list looks like.
              </p>
            </article>
            <article className="principle-card reveal-up">
              <span className="principle-num">02</span>
              <h3>Shaped by parents.</h3>
              <p>
                Recognition, language and usefulness matter more than adding
                technology for its own sake.
              </p>
            </article>
            <article className="principle-card reveal-up">
              <span className="principle-num">03</span>
              <h3>Learning Through Life.</h3>
              <p>
                MySENn keeps learning with families as needs, feedback and
                everyday life continue to change.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="travel-showcase-section content-section">
        <div className="page-shell travel-showcase-grid">
          <div className="travel-showcase-copy reveal-up">
            <div className="section-tag">
              <span className="tag-spark" aria-hidden="true">✦</span>
              Community Exchange
            </div>
            <h2 className="heading-lines">
              <span>Useful things</span>
              <span>should travel.</span>
            </h2>
            <p className="travel-lede">
              What helped your child through a hard morning could be the exact breakthrough another family needs today.
            </p>
            <div className="travel-pillars">
              <div className="travel-pillar">
                <strong>100%</strong>
                <span>Parent-driven lived insights</span>
              </div>
              <div className="travel-pillar">
                <strong>3-Way</strong>
                <span>Home, school &amp; clinic clarity</span>
              </div>
              <div className="travel-pillar">
                <strong>Zero</strong>
                <span>Medical jargon or pressure</span>
              </div>
            </div>
            <Link className="button button-dark magnetic" href="/community">
              <span>Explore Community Insights</span>
              <i>↗</i>
            </Link>
          </div>

          <div
            className="travel-stream-visual reveal-up"
            aria-label="Visual journey showing how a family observation travels between home, school, and clinic"
          >
            <div className="stream-card stream-home">
              <div className="stream-badge home-badge">
                <span>Home Observation</span>
                <small>8:15 AM</small>
              </div>
              <p>“Showing a 5-minute visual card before leaving the house stopped morning meltdowns.”</p>
              <div className="stream-meta">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah, Leo's Mum"
                  width={44}
                  height={44}
                  className="stream-avatar-img"
                />
                <div className="stream-meta-info">
                  <strong>Sarah</strong>
                  <span>Leo&apos;s Mum (Year 3)</span>
                </div>
              </div>
            </div>

            <div className="stream-connector">
              <span className="connector-line" />
              <span className="connector-pill">✦ Travels into the classroom</span>
              <span className="connector-line" />
            </div>

            <div className="stream-card stream-school">
              <div className="stream-badge school-badge">
                <span>Classroom Support</span>
                <small>11:30 AM</small>
              </div>
              <p>“Teacher placed the same prompt on Leo&apos;s desk. Seamless transition into phonics without distress.”</p>
              <div className="stream-meta">
                <Image
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Mrs. Wright, School SENCO"
                  width={44}
                  height={44}
                  className="stream-avatar-img"
                />
                <div className="stream-meta-info">
                  <strong>Mrs. Wright</strong>
                  <span>School SENCO &amp; Inclusion Lead</span>
                </div>
              </div>
            </div>

            <div className="stream-connector">
              <span className="connector-line" />
              <span className="connector-pill">✦ Informs clinical review</span>
              <span className="connector-line" />
            </div>

            <div className="stream-card stream-clinic">
              <div className="stream-badge clinic-badge">
                <span>Clinical Context</span>
                <small>Quarterly Review</small>
              </div>
              <p>“Review focused on celebrating progress instead of spending 20 minutes recapping past events.”</p>
              <div className="stream-meta">
                <Image
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Speech & Language Specialist"
                  width={44}
                  height={44}
                  className="stream-avatar-img"
                />
                <div className="stream-meta-info">
                  <strong>Speech &amp; Language Team</strong>
                  <span>NHS Specialist Support</span>
                </div>
              </div>
            </div>

            <div className="stream-connector">
              <span className="connector-line" />
              <span className="connector-pill">✦ Solid evidence for Annual Review</span>
              <span className="connector-line" />
            </div>

            <div className="stream-card stream-ehcp">
              <div className="stream-badge ehcp-badge">
                <span>Educational Psychology</span>
                <small>EHCP Evidence</small>
              </div>
              <p>“Clear, dated documentation of regulation patterns helped confirm Section F provision smoothly.”</p>
              <div className="stream-meta">
                <Image
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Dr. David K., Educational Psychologist"
                  width={44}
                  height={44}
                  className="stream-avatar-img"
                />
                <div className="stream-meta-info">
                  <strong>Dr. David K.</strong>
                  <span>Educational Psychologist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CommunityContent() {
  return <CommunityInteractive />;
}

export function FaqContent() {
  return (
    <section className="faq-page">
      <div className="page-shell">
        <div className="faq-page-head reveal-up">
          <div>
            <div className="section-tag">
              <span className="tag-spark" aria-hidden="true">✦</span>
              Frequently Asked Questions
            </div>
            <h1 className="heading-lines">
              <span>Clear answers.</span>
              <span>No jargon.</span>
            </h1>
          </div>
          <p>
            MySENn is designed to support observation and calm conversations around your child.
            Explore quick answers on everyday use, privacy safeguards, reports, and our clinical boundaries.
          </p>
        </div>

        <FaqHub />
      </div>
    </section>
  );
}

export function CookiePolicyContent() {
  const blocks = [
    {
      title: "1. Introduction",
      content:
        "This Cookie Policy explains how MySENn (“we,” “us,” or “our”) uses cookies and similar tracking technologies on https://mysenn.com to provide, improve, and protect our services.",
    },
    {
      title: "2. What are Cookies?",
      content:
        "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over a period of time.",
    },
    {
      title: "3. How We Use Cookies",
      content: (
        <>
          <p>We use cookies to:</p>
          <ul>
            <li>Understand and save your preferences for future visits.</li>
            <li>
              Compile aggregate data about site traffic and site interaction to
              offer better site experiences and tools in the future.
            </li>
            <li>Maintain security.</li>
            <li>Manage user sessions.</li>
            <li>Other legitimate uses.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Types of Cookies We Use",
      content: (
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for the operation of
            our website (e.g., logging into secure areas).
          </li>
          <li>
            <strong>Analytical/Performance Cookies:</strong> Allow us to
            recognize and count the number of visitors and see how they move
            around the site.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Used to recognize you when you
            return to our website.
          </li>
        </ul>
      ),
    },
    {
      title: "5. Managing Cookies",
      content:
        "You can control or disable cookies through your browser settings. Please note that if you choose to disable cookies, some features of our website may not function correctly.",
    },
    {
      title: "6. Updates to This Policy",
      content:
        "We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with an updated “Last updated” date.",
    },
    {
      title: "7. Contact Us",
      content: (
        <p>
          For any questions regarding our use of cookies, please contact us at:{" "}
          <a href="mailto:support@mysenn.com">
            <strong>support@mysenn.com</strong>
          </a>
        </p>
      ),
    },
  ];

  return (
    <section className="policy-page">
      <div className="policy-shell">
        <div className="section-tag reveal-up">Legal</div>
        <h1 className="reveal-up">Cookie Policy</h1>
        <p className="lede reveal-up">MySENn — Last updated: 23 August 2026</p>
        <div className="policy-copy">
          {blocks.map(({ title, content }) => (
            <section className="policy-block reveal-up" key={title}>
              <h2>{title}</h2>
              {typeof content === "string" ? <p>{content}</p> : content}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrivacyPolicyContent() {
  const blocks = [
    {
      title: "1. What is MySENn?",
      content:
        "MySENn is a digital observation companion designed to support parents and carers supporting children and young people with Special Educational Needs (SEN) and neurodivergence. It helps families capture everyday moments, understand developmental patterns over time, and build a clearer picture of their child's journey for collaborative conversations with educators and healthcare professionals.",
    },
    {
      title: "2. The Principles We Stand By",
      content: (
        <>
          <p>
            We treat your child&apos;s data with clinical-grade confidentiality. You maintain 100% ownership of all information recorded in the application. We adhere strictly to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We never sell, monetise, or share your family&apos;s personal data with third-party advertisers.
          </p>
          <div className="policy-gdpr-seal-card">
            <Image
              src="/assets/acorn-gdpr-compliant.jpg"
              alt="GDPR Compliant Assured by Acorn"
              width={72}
              height={72}
              className="policy-acorn-seal"
            />
            <div>
              <strong>GDPR Compliant · Assured by Acorn</strong>
              <p>Independent data protection review verifying compliance with UK GDPR and Data Protection benchmarks.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "3. What Information We Collect",
      content: (
        <>
          <p>
            Depending on how you choose to use MySENn, we may collect the
            following information provided directly by you:
          </p>
          <ul>
            <li>
              <strong>Account Information:</strong> Name, email address, and
              account authentication credentials.
            </li>
            <li>
              <strong>Child Profile Data:</strong> Preferred first name or
              nickname, age range, and general developmental notes you choose to
              record.
            </li>
            <li>
              <strong>Everyday Observations:</strong> Text entries, audio notes,
              behaviour patterns, sleep logs, sensory observations, appointment
              notes, and strategies that helped your child.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, device type, operating
              system, and essential performance cookies required for security
              and session integrity.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. How We Use Your Information",
      content: (
        <>
          <p>Your information is used solely to:</p>
          <ul>
            <li>Provide, maintain, and secure your personal MySENn account.</li>
            <li>
              Synthesise observations into private Smart Insights and exportable
              reports that you can choose to share with professionals.
            </li>
            <li>
              Transcribe voice notes you record for effortless in-app logging.
            </li>
            <li>
              Respond to customer support requests and security communications.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Data Security and Storage",
      content:
        "All data transmitted between your device and our servers is encrypted in transit using industry-standard TLS protocols and encrypted at rest using AES-256 encryption. Our infrastructure is hosted within secure, ISO 27001-certified UK/EU cloud data centres.",
    },
    {
      title: "6. Your Rights Under UK GDPR",
      content: (
        <>
          <p>
            Under UK data protection law, you have comprehensive rights
            regarding your personal data, including:
          </p>
          <ul>
            <li>The right to access and receive a copy of your personal data.</li>
            <li>The right to rectify inaccurate or incomplete information.</li>
            <li>
              The right to request erasure (&ldquo;the right to be
              forgotten&rdquo;) of your and your child&apos;s data at any time.
            </li>
            <li>The right to data portability in a machine-readable format.</li>
            <li>The right to withdraw consent at any time.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Contact and Data Protection Officer",
      content: (
        <p>
          If you have questions, concerns, or wish to exercise your data rights,
          please contact our privacy team directly at:{" "}
          <a href="mailto:support@mysenn.com?subject=Privacy%20Inquiry">
            <strong>support@mysenn.com</strong>
          </a>
        </p>
      ),
    },
  ];

  return (
    <section className="policy-page">
      <div className="policy-shell">
        <div className="section-tag reveal-up">
          <span className="tag-spark" aria-hidden="true">✦</span>
          Legal &amp; Privacy
        </div>
        <h1 className="reveal-up">Privacy Policy</h1>
        <p className="lede reveal-up">MySENn — Last updated: 26 September 2026</p>
        <div className="policy-copy">
          {blocks.map(({ title, content }) => (
            <section className="policy-block reveal-up" key={title}>
              <h2>{title}</h2>
              {typeof content === "string" ? <p>{content}</p> : content}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

