"use client";

import { useState } from "react";
import Link from "next/link";
import { EarlyAccessTrigger } from "@/components/early-access-trigger";
import "./how-it-helps-interactive.module.css";

type CaptureMode = "voice" | "note" | "tags";
type InsightRange = "7d" | "30d" | "term";
type ReportAudience = "senco" | "paediatrician" | "therapy";
type ActiveEnv = "home" | "school" | "clinic";

const ENV_DATA = {
  home: {
    tag: "HOME SANCTUARY",
    tagClass: "tag-home",
    load: "Low Sensory Load",
    loadClass: "load-low",
    title: "Evening Sanctuary",
    subtitle: "Decompression space & post-school unmasking",
    anchorLabel: "PRIMARY ANCHOR",
    anchor: "Weighted blanket & unstructured quiet reading",
    factors: [
      { label: "Acoustics", val: "Controlled / Quiet" },
      { label: "Visual Stimuli", val: "Soft Warm Lighting" },
      { label: "Demands", val: "Zero Task Pressure" },
    ],
    quote: "“Masking release typically occurs 30 minutes after return from school. 20 minutes of quiet space prevents dysregulation entirely.”",
  },
  school: {
    tag: "CLASSROOM & HALL",
    tagClass: "tag-school",
    load: "High Sensory Load",
    loadClass: "load-high",
    title: "School Routine",
    subtitle: "Auditory stimulation & rapid transitions",
    anchorLabel: "PRIMARY ACCOMMODATION",
    anchor: "5-min visual countdown & quiet lunch pass to library",
    factors: [
      { label: "Acoustics", val: "Echo Dining Hall" },
      { label: "Visual Stimuli", val: "Fluorescent Tubes" },
      { label: "Transitions", val: "6 Subject Changes Daily" },
    ],
    quote: "“Dining hall noise requires proactive headset use. Providing a quiet pass to the library preserves emotional reserve for the afternoon.”",
  },
  clinic: {
    tag: "CLINIC & APPOINTMENTS",
    tagClass: "tag-clinic",
    load: "Moderate / Variable",
    loadClass: "load-mod",
    title: "Consultation Room",
    subtitle: "Unfamiliar specialists & clinical waiting areas",
    anchorLabel: "PRIMARY STRATEGY",
    anchor: "Tactile fidgets & 1-Page Summary Brief",
    factors: [
      { label: "Acoustics", val: "Sterile Waiting Area" },
      { label: "Social", val: "Unfamiliar Clinicians" },
      { label: "Cognitive", val: "High Recall Pressure" },
    ],
    quote: "“Showing the 1-Page Summary Brief answered routine history instantly, giving the doctor 35 minutes for strategic conversation.”",
  },
};

const INSIGHT_DATA = {
  "7d": {
    kicker: "SMART INSIGHTS · PAST 7 DAYS",
    title: "Leo's Weekly Pattern Analysis",
    statusBadge: "Trend Identified",
    widgetLabel: "Daily Sensory Regulation Stability:",
    bars: [
      { day: "Mon", height: "80%", status: "steady" },
      { day: "Tue", height: "45%", status: "spike" },
      { day: "Wed", height: "90%", status: "calm" },
      { day: "Thu", height: "35%", status: "spike" },
      { day: "Fri", height: "85%", status: "calm" },
      { day: "Sat", height: "95%", status: "calm" },
      { day: "Sun", height: "90%", status: "calm" },
    ],
    highlightBadge: "HIGH-CONFIDENCE OBSERVATION",
    highlightTitle: "Noise & Sleep Correlation",
    highlightDesc: "On days following fewer than 7 hours of sleep (Tuesday & Thursday), dining hall noise triggered sensory distress in 4 out of 5 instances.",
    evidenceChips: ["4 Events Tagged", "Weighted Pad Resolved 100%"],
  },
  "30d": {
    kicker: "SMART INSIGHTS · PAST 30 DAYS",
    title: "Monthly Transition & Fatigue Trajectory",
    statusBadge: "Clear Adaptation Pattern",
    widgetLabel: "Weekly Average Regulation Index:",
    bars: [
      { day: "Wk 1", height: "55%", status: "spike" },
      { day: "Wk 2", height: "68%", status: "steady" },
      { day: "Wk 3", height: "84%", status: "calm" },
      { day: "Wk 4", height: "92%", status: "calm" },
    ],
    highlightBadge: "MULTI-WEEK TREND",
    highlightTitle: "Visual Schedule Routine Success",
    highlightDesc: "Unprompted sensory spikes dropped by 58% after week 2 following the introduction of visual door anchors and 5-minute countdowns.",
    evidenceChips: ["18 Observations Logged", "58% Spike Reduction"],
  },
  "term": {
    kicker: "SMART INSIGHTS · FULL AUTUMN TERM",
    title: "Full Term Multi-Setting Baseline",
    statusBadge: "Documented Long-Term Context",
    widgetLabel: "Environment Regulation Comparison:",
    bars: [
      { day: "Class", height: "76%", status: "steady" },
      { day: "Hall", height: "42%", status: "spike" },
      { day: "Yard", height: "70%", status: "steady" },
      { day: "Home", height: "94%", status: "calm" },
    ],
    highlightBadge: "ANNUAL REVIEW EVIDENCE",
    highlightTitle: "Acoustic Load as Dominant Variable",
    highlightDesc: "Across 84 total logs, acoustic density was the single factor separating calm afternoons from dysregulation, giving SENCO concrete justification for quiet lunch passes.",
    evidenceChips: ["84 Verified Logs", "Ready for EHCP Review"],
  },
};

export function HowItHelpsInteractive() {
  const [captureMode, setCaptureMode] = useState<CaptureMode>("voice");
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [insightRange, setInsightRange] = useState<InsightRange>("7d");
  const [reportAudience, setReportAudience] = useState<ReportAudience>("senco");
  const [activeEnv, setActiveEnv] = useState<ActiveEnv>("home");

  const currentInsight = INSIGHT_DATA[insightRange];
  const currentEnv = ENV_DATA[activeEnv];

  return (
    <>
      <section className="inner-hero how-it-helps-hero">
        <div className="page-shell reveal-up">
          <div className="section-tag">
            <span className="tag-spark" aria-hidden="true">✦</span>
            Everyday observation companion
          </div>
          <h1 className="heading-lines">
            <span>Let the story</span>
            <span>travel with you.</span>
          </h1>
          <p className="hero-support">
            Transform everyday moments into clear, objective patterns. Capture observations in seconds, connect the dots over time, and bring calm context to every professional conversation.
          </p>

          <div className="quick-jump-ribbon" role="navigation" aria-label="Page sections">
            <a href="#capture" className="jump-chip">
              <span className="jump-num">01</span>
              <span>Start Small</span>
            </a>
            <a href="#insights" className="jump-chip">
              <span className="jump-num">02</span>
              <span>Smart Insights</span>
            </a>
            <a href="#reports" className="jump-chip">
              <span className="jump-num">03</span>
              <span>1-Page Reports</span>
            </a>
            <a href="#environments" className="jump-chip">
              <span className="jump-num">04</span>
              <span>Environments</span>
            </a>
            <a href="#professionals" className="jump-chip">
              <span className="jump-num">05</span>
              <span>With Professionals</span>
            </a>
          </div>
        </div>
      </section>

      <section className="content-section white how-step-section" id="capture">
        <div className="page-shell how-step-grid">
          <div className="how-step-copy reveal-up">
            <div className="section-tag">
              <span className="step-badge">01</span>
              Start small
            </div>
            <h2>Record what feels useful.</h2>
            <p className="how-step-lede">
              There is no pressure to log everything or maintain artificial streaks. Add a 20-second voice note or type two sentences while life is happening.
            </p>

            <div className="how-capture-toggles" role="tablist" aria-label="Input mode selector">
              <button
                type="button"
                role="tab"
                aria-selected={captureMode === "voice"}
                className={`capture-toggle-btn ${captureMode === "voice" ? "active" : ""}`}
                onClick={() => setCaptureMode("voice")}
              >
                Voice Note
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={captureMode === "note"}
                className={`capture-toggle-btn ${captureMode === "note" ? "active" : ""}`}
                onClick={() => setCaptureMode("note")}
              >
                Quick Text
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={captureMode === "tags"}
                className={`capture-toggle-btn ${captureMode === "tags" ? "active" : ""}`}
                onClick={() => setCaptureMode("tags")}
              >
                Auto-Tags
              </button>
            </div>

            <ul className="feature-check-list">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Zero pressure</strong>
                  <p>Log 30 seconds once a week or three times a day. Your timeline never resets.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Context extraction</strong>
                  <p>Identifies sleep patterns, sensory triggers, environment, and what calmed things down.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="how-step-visual reveal-up" aria-label="Interactive capture preview">
            <div className="device-studio-card">
              <div className="studio-card-header">
                <div className="studio-card-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="studio-card-title">Leo&apos;s Daily Timeline · In-App Preview</span>
                <span className="studio-card-badge">LIVE PREVIEW</span>
              </div>

              {captureMode === "voice" && (
                <div className="studio-mode-pane voice-pane">
                  <div className="voice-audio-card">
                    <button
                      type="button"
                      className={`voice-play-circle ${isPlayingVoice ? "playing" : ""}`}
                      onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                      aria-label={isPlayingVoice ? "Pause voice note" : "Play voice note"}
                    >
                      <span>{isPlayingVoice ? "❚❚" : "▶"}</span>
                    </button>
                    <div className="voice-bars-container">
                      <div className={`visualizer-bars ${isPlayingVoice ? "active" : ""}`}>
                        <span /><span /><span /><span /><span /><span /><span /><span />
                        <span /><span /><span /><span /><span /><span /><span /><span />
                      </div>
                      <div className="voice-time-meta">
                        <span>00:18 / 00:26</span>
                        <span>{isPlayingVoice ? "Playing recorded audio..." : "Click to preview speech-to-text"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="voice-transcription-bubble">
                    <span className="transcript-label">Transcribed in seconds:</span>
                    <p>
                      &ldquo;Leo had a sensory spike in the school dining hall at 12:20 PM today. Clattering trays were overwhelming. His TA provided the weighted lap pad and noise-reducing headphones, and he settled within 8 minutes.&rdquo;
                    </p>
                  </div>

                  <div className="detected-chips-row">
                    <span className="chip-tag tag-sensory">Sensory Spike</span>
                    <span className="chip-tag tag-trigger">Dining Hall Acoustics</span>
                    <span className="chip-tag tag-strategy">Headphones + Lap Pad</span>
                    <span className="chip-tag tag-time">8m Recovery</span>
                  </div>

                  <div className="timeline-confirm-banner">
                    <span className="confirm-icon">✓</span>
                    <span>Saved to Leo&apos;s Timeline · Today at 12:28 PM</span>
                  </div>
                </div>
              )}

              {captureMode === "note" && (
                <div className="studio-mode-pane note-pane">
                  <div className="quick-note-box">
                    <div className="note-box-header">
                      <span>Quick Observation</span>
                      <small>Auto-saves as you type</small>
                    </div>
                    <p className="note-text-body">
                      Noticeable transition fatigue leaving playground today. Showing the photo of our front door gave him a clear mental anchor and prevented distress.
                    </p>
                    <div className="note-meta-bar">
                      <span className="note-category-pill">Transitions &amp; Visual Anchors</span>
                      <span className="note-stamp">Today, 3:45 PM</span>
                    </div>
                  </div>
                  <div className="quick-tag-selector">
                    <span className="selector-title">Detected Tags:</span>
                    <div className="quick-tags-grid">
                      <span className="quick-tag selected">#TransitionRoutine ✓</span>
                      <span className="quick-tag selected">#PhotoAnchor ✓</span>
                      <span className="quick-tag">#Bedtime</span>
                      <span className="quick-tag">#Diet</span>
                    </div>
                  </div>
                </div>
              )}

              {captureMode === "tags" && (
                <div className="studio-mode-pane tags-pane">
                  <div className="tags-hero-note">
                    <strong>1-Tap Context Tagging</strong>
                    <p>When you have zero time to write, tap tags to log context instantly.</p>
                  </div>
                  <div className="multi-tag-grid">
                    <div className="tag-group">
                      <small>SENSORY</small>
                      <div className="tag-pill-row">
                        <span className="interactive-pill active">Noise sensitivity</span>
                        <span className="interactive-pill">Bright lighting</span>
                        <span className="interactive-pill">Clothing textures</span>
                      </div>
                    </div>
                    <div className="tag-group">
                      <small>WHAT HELPED</small>
                      <div className="tag-pill-row">
                        <span className="interactive-pill active">Weighted pad</span>
                        <span className="interactive-pill active">Visual countdown</span>
                        <span className="interactive-pill">Quiet space</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section how-step-section" id="insights">
        <div className="page-shell how-step-grid reverse-grid">
          <div className="how-step-copy reveal-up">
            <div className="section-tag">
              <span className="step-badge">02</span>
              Smart pattern recognition
            </div>
            <h2 className="heading-lines">
              <span>See the bigger</span>
              <span>picture, quickly.</span>
            </h2>
            <p className="how-step-lede">
              Smart Insights bring together scattered moments across days and weeks. It connects dots that are difficult to spot when you&apos;re living through daily chaos.
            </p>

            <div className="range-filter-dock" role="tablist" aria-label="Insight time range">
              <button
                type="button"
                role="tab"
                aria-selected={insightRange === "7d"}
                className={`range-pill ${insightRange === "7d" ? "active" : ""}`}
                onClick={() => setInsightRange("7d")}
              >
                Past 7 Days
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={insightRange === "30d"}
                className={`range-pill ${insightRange === "30d" ? "active" : ""}`}
                onClick={() => setInsightRange("30d")}
              >
                Past 30 Days
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={insightRange === "term"}
                className={`range-pill ${insightRange === "term" ? "active" : ""}`}
                onClick={() => setInsightRange("term")}
              >
                Full School Term
              </button>
            </div>

            <ul className="feature-check-list">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Objective correlation</strong>
                  <p>Highlights links between low sleep hours and heightened afternoon sensory triggers.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Observations, not dictates</strong>
                  <p>Gentle patterns to explore with your specialist, not automated clinical diagnosis.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="how-step-visual reveal-up" aria-label="Smart Insights interactive dashboard">
            <div className="insights-dashboard-card">
              <div className="dashboard-head">
                <div>
                  <span className="dashboard-kicker">{currentInsight.kicker}</span>
                  <h3 className="dashboard-title">{currentInsight.title}</h3>
                </div>
                <span className="insights-active-pill">{currentInsight.statusBadge}</span>
              </div>

              <div className="weekly-bars-widget">
                <span className="widget-label">{currentInsight.widgetLabel}</span>
                <div className="spark-bars-row">
                  {currentInsight.bars.map((item, idx) => (
                    <div key={idx} className="spark-bar-item">
                      <div className="bar-track">
                        <div
                          className={`bar-fill ${item.status}`}
                          style={{ height: item.height }}
                        />
                      </div>
                      <span className="bar-day">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="insight-card-highlight">
                <div className="insight-card-top">
                  <span className="insight-badge">{currentInsight.highlightBadge}</span>
                </div>
                <h4 className="insight-summary-title">
                  {currentInsight.highlightTitle}
                </h4>
                <p className="insight-summary-desc">
                  {currentInsight.highlightDesc}
                </p>
                <div className="insight-footer-meta">
                  {currentInsight.evidenceChips.map((chip, cIdx) => (
                    <span key={cIdx} className={cIdx === 0 ? "evidence-chip" : "solution-chip"}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="clinical-boundary-note">
                <small>Observations support conversations with SENCOs and paediatricians. Not medical advice.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section white how-step-section reports-step-section" id="reports">
        <div className="page-shell">
          <div className="reports-studio-layout reveal-up">
            <div className="reports-meta-col how-step-copy">
              <div className="section-tag">
                <span className="step-badge">03</span>
                Reports &amp; context
              </div>
              <h2 className="heading-lines">
                <span>Bring context</span>
                <span>to the conversation.</span>
              </h2>
              <p className="how-step-lede">
                Reports transform months of scattered notes into a structured 1-page summary. Designed for 20-minute SENCO, GP, or speech therapy appointments with clear evidence.
              </p>

              <div className="report-audience-dock" role="tablist" aria-label="Select report audience">
                <button
                  type="button"
                  role="tab"
                  aria-selected={reportAudience === "senco"}
                  className={`audience-pill ${reportAudience === "senco" ? "active" : ""}`}
                  onClick={() => setReportAudience("senco")}
                >
                  School SENCO Brief
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={reportAudience === "paediatrician"}
                  className={`audience-pill ${reportAudience === "paediatrician" ? "active" : ""}`}
                  onClick={() => setReportAudience("paediatrician")}
                >
                  Paediatrician &amp; GP
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={reportAudience === "therapy"}
                  className={`audience-pill ${reportAudience === "therapy" ? "active" : ""}`}
                  onClick={() => setReportAudience("therapy")}
                >
                  Speech &amp; OT Team
                </button>
              </div>

              <ul className="feature-check-list">
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Save time in meetings</strong>
                    <p>Never struggle to remember dates, triggers, or what happened six months ago.</p>
                  </div>
                </li>
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Export to PDF &amp; print</strong>
                    <p>Standardized format respected by UK educators, GPs, and NHS clinical teams.</p>
                  </div>
                </li>
              </ul>

            </div>

            <div className="reports-preview-col">
              <div className="report-document-sheet">
                <div className="report-sheet-header">
                  <div className="doc-logo-line">
                    <span className="doc-brand">MySENn</span>
                    <span className="doc-type-badge">
                      {reportAudience === "senco"
                        ? "SENCO OBSERVATION BRIEF"
                        : reportAudience === "paediatrician"
                        ? "CLINICAL TIMELINE BRIEF"
                        : "THERAPY STRATEGY HANDOVER"}
                    </span>
                  </div>
                  <div className="doc-child-meta">
                    <div>
                      <strong>Child:</strong> Leo M. (Age 8)
                    </div>
                    <div>
                      <strong>Period:</strong> Past 30 Days
                    </div>
                    <div>
                      <strong>Target:</strong>{" "}
                      {reportAudience === "senco"
                        ? "School SENCO & Teaching Assistant"
                        : reportAudience === "paediatrician"
                        ? "NHS Paediatrician & GP"
                        : "Speech & OT Multidisciplinary Team"}
                    </div>
                  </div>
                </div>

                {reportAudience === "senco" && (
                  <>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">1. Classroom Accommodations (What Worked)</h5>
                      <ul className="doc-bullet-list">
                        <li>
                          <strong>5-Minute Visual Countdown:</strong> Prevented 100% of playground transition tears.
                        </li>
                        <li>
                          <strong>Quiet Hall Pass:</strong> Reduced lunchtime dining hall sensory spikes to zero.
                        </li>
                      </ul>
                    </div>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">2. Recurring Environmental Triggers</h5>
                      <div className="doc-data-pill-row">
                        <span className="doc-trigger-pill">Sudden bell acoustic changes (3 incidents)</span>
                        <span className="doc-trigger-pill">Unannounced supply teachers (2 incidents)</span>
                      </div>
                    </div>
                  </>
                )}

                {reportAudience === "paediatrician" && (
                  <>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">1. Sleep &amp; Sensory Distress Correlation</h5>
                      <ul className="doc-bullet-list">
                        <li>
                          <strong>Sleep Deficit Indicator:</strong> Fewer than 7h sleep preceded 80% of reported dysregulation events.
                        </li>
                        <li>
                          <strong>Onset Timing:</strong> Dysregulation concentrated in mid-afternoon (1:30 PM - 2:45 PM).
                        </li>
                      </ul>
                    </div>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">2. Regulation Durations</h5>
                      <div className="doc-data-pill-row">
                        <span className="doc-trigger-pill">Mean settling time: 8.2 mins with weighted lap pad</span>
                        <span className="doc-trigger-pill">Zero escalations requiring physical intervention</span>
                      </div>
                    </div>
                  </>
                )}

                {reportAudience === "therapy" && (
                  <>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">1. Proprioceptive &amp; Sensory Strategies</h5>
                      <ul className="doc-bullet-list">
                        <li>
                          <strong>Weighted Lap Pad:</strong> Provided immediate somatic grounding within 3 minutes of presentation.
                        </li>
                        <li>
                          <strong>Tactile Pocket Fidgets:</strong> Maintained focus during structured group carpet sessions.
                        </li>
                      </ul>
                    </div>
                    <div className="doc-section-block">
                      <h5 className="doc-section-title">2. Auditory Thresholds</h5>
                      <div className="doc-data-pill-row">
                        <span className="doc-trigger-pill">Active noise-cancelling headphones used 14 times</span>
                        <span className="doc-trigger-pill">Echo sensitivity noted in tiled assembly hall</span>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section how-step-section environments-step-section" id="environments">
        <div className="page-shell how-step-grid reverse-grid">
          <div className="how-step-copy reveal-up">
            <div className="section-tag">
              <span className="step-badge">04</span>
              For families
            </div>
            <h2 className="heading-lines">
              <span>One child.</span>
              <span>Many environments.</span>
            </h2>
            <p className="how-step-lede">
              Your child is different in the classroom than on the living room sofa. MySENn tracks how settings change their nervous system so you can see the complete picture.
            </p>

            <div className="how-capture-toggles" role="tablist" aria-label="Select environment">
              <button
                type="button"
                role="tab"
                aria-selected={activeEnv === "home"}
                className={`capture-toggle-btn ${activeEnv === "home" ? "active" : ""}`}
                onClick={() => setActiveEnv("home")}
              >
                Home Sanctuary
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeEnv === "school"}
                className={`capture-toggle-btn ${activeEnv === "school" ? "active" : ""}`}
                onClick={() => setActiveEnv("school")}
              >
                Classroom
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeEnv === "clinic"}
                className={`capture-toggle-btn ${activeEnv === "clinic" ? "active" : ""}`}
                onClick={() => setActiveEnv("clinic")}
              >
                Consultation
              </button>
            </div>

            <ul className="feature-check-list">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Context across settings</strong>
                  <p>Understand why meltdowns happen at 3:45 PM after holding it together all day at school.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Strategies that travel</strong>
                  <p>Take what calms your child at home directly to their SENCO and teaching assistant.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="how-step-visual reveal-up" aria-label="Environment sensory comparison visual">
            <div className="env-interactive-card">
              <div className="env-contrast-top">
                <span className={`env-badge-tag ${currentEnv.tagClass}`}>{currentEnv.tag}</span>
                <span className={`env-load-meter ${currentEnv.loadClass}`}>{currentEnv.load}</span>
              </div>
              <h3 className="env-contrast-title">{currentEnv.title}</h3>
              <p className="env-contrast-role">{currentEnv.subtitle}</p>

              <div className="env-factors-row">
                {currentEnv.factors.map((f, fIdx) => (
                  <div key={fIdx} className="env-factor-pill">
                    <small>{f.label}</small>
                    <strong>{f.val}</strong>
                  </div>
                ))}
              </div>

              <div className="env-pill-box">
                <small>{currentEnv.anchorLabel}</small>
                <strong>{currentEnv.anchor}</strong>
              </div>

              <p className="env-contrast-quote">{currentEnv.quote}</p>

              <div className="env-card-footer">
                <div className="env-dots-nav">
                  {(["home", "school", "clinic"] as ActiveEnv[]).map((envKey) => (
                    <button
                      key={envKey}
                      type="button"
                      aria-label={`Switch to ${envKey}`}
                      className={`env-dot ${activeEnv === envKey ? "active" : ""}`}
                      onClick={() => setActiveEnv(envKey)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section white how-step-section professionals-step-section" id="professionals">
        <div className="page-shell how-step-grid">
          <div className="how-step-copy reveal-up">
            <div className="section-tag">
              <span className="step-badge">05</span>
              With professionals
            </div>
            <h2 className="heading-lines">
              <span>A clearer start.</span>
              <span>Not a replacement.</span>
            </h2>
            <p className="how-step-lede">
              MySENn is a communication companion designed to empower parents with factual observations. It does not replace doctors, provide diagnoses, or replace emergency clinical care.
            </p>

            <ul className="feature-check-list">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Objective shared reality</strong>
                  <p>Parents and specialists start from verified observations rather than memory gaps.</p>
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Respecting clinical boundaries</strong>
                  <p>MySENn documents facts - qualified professionals make medical and educational decisions.</p>
                </div>
              </li>
            </ul>

            <div className="pro-action-buttons">
              <EarlyAccessTrigger className="button button-dark magnetic">
                <span>Join early access</span>
                <i>↗</i>
              </EarlyAccessTrigger>
              <Link className="button button-light magnetic" href="/faq">
                <span>Read the FAQs</span>
                <i>↗</i>
              </Link>
            </div>
          </div>

          <div className="how-step-visual reveal-up" aria-label="Collaborative care network">
            <div className="pro-collab-board">
              <div className="collab-board-header">
                <div className="collab-header-left">
                  <span className="collab-status-dot" />
                  <strong>Collaborative Care Handover</strong>
                </div>
              </div>

              <div className="collab-stream-nodes">
                <div className="collab-node-item">
                  <div className="node-icon-box senco">
                    <span>SENCO</span>
                  </div>
                  <div className="node-content">
                    <div className="node-title-row">
                      <strong>School SENCO &amp; TA</strong>
                      <span className="node-tag">Classroom Passport</span>
                    </div>
                    <p>Visual timer accommodation &amp; quiet pass logged into Leo&apos;s support plan.</p>
                  </div>
                </div>

                <div className="collab-node-item">
                  <div className="node-icon-box clinic">
                    <span>GP</span>
                  </div>
                  <div className="node-content">
                    <div className="node-title-row">
                      <strong>NHS Paediatrician</strong>
                      <span className="node-tag">Clinical History</span>
                    </div>
                    <p>Sleep disruption timeline and objective recovery durations ready for consultation.</p>
                  </div>
                </div>

                <div className="collab-node-item">
                  <div className="node-icon-box therapy">
                    <span>OT</span>
                  </div>
                  <div className="node-content">
                    <div className="node-title-row">
                      <strong>Speech &amp; OT Team</strong>
                    </div>
                    <p>Weighted lap pad 8-minute calming metric verified across home and school.</p>
                  </div>
                </div>
              </div>

              <div className="collab-board-footer">
                <span className="collab-footer-note">Family Voice ↔ School SENCO ↔ NHS Paediatrician ↔ Therapists</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
