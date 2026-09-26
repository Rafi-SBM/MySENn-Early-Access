"use client";

import { useRef } from "react";

export function VoiceDemo() {
  const waveformRef = useRef<HTMLDivElement>(null);

  function replayVoiceCue() {
    waveformRef.current?.animate(
      [
        { opacity: 0.4, transform: "scaleX(.86)" },
        { opacity: 1, transform: "scaleX(1)" },
      ],
      { duration: 450, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  }

  return (
    <div className="voice-demo">
      <div className="voice-label">Illustrative product flow</div>
      <div className="phone-shell">
        <div className="phone-status">
          <span>9:41</span>
          <i />
          <b>•••</b>
        </div>
        <div className="phone-greeting">
          <small>Quick capture</small>
          <h3>What happened?</h3>
        </div>
        <div className="voice-entry">
          <button
            className="mic-pulse"
            type="button"
            aria-label="Replay voice capture animation"
            onClick={replayVoiceCue}
          >
            <span>●</span>
          </button>
          <div className="waveform" ref={waveformRef} aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
          <span>0:18</span>
        </div>
        <p className="voice-text">
          “The bus was noisy after school. Headphones helped and they settled in
          about ten minutes.”
        </p>
        <div className="capture-tags">
          <span>After school</span>
          <span>Sensory</span>
          <span>What helped</span>
        </div>
        <div className="capture-confirm">
          <i>✓</i>
          <div>
            <b>Moment captured</b>
            <small>You can edit this anytime.</small>
          </div>
        </div>
      </div>
      <div className="product-float p-one">
        No forms.
        <br />
        <b>Just talk.</b>
      </div>
      <div className="product-float p-two">
        Pattern building
        <br />
        <b>gently over time</b>
      </div>
    </div>
  );
}
