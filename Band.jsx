import React from 'react';
import { photo } from '../data/content';

export default function Band() {
  return (
    <section className="band section">
      <div
        className="band-bg"
        style={{ backgroundImage: `url(${photo('photo-1578575437130-527eed3abbec', 2000)})` }}
      />
      <div>
        <div className="eyebrow"><span /> POSITIONED FOR POSSIBILITY</div>
        <h2>From Dubai.<br /><span>To the world.</span></h2>
        <p>Third-port and re-export trade, connecting sourcing requirements with supply across continents.</p>
      </div>

      <div>
        <svg className="route" viewBox="0 0 560 220" role="img" aria-label="Trade routes from Dubai to global markets">
          <path id="r1" className="route-line" d="M60 170 C 180 20, 380 20, 500 110" />
          <path id="r2" className="route-line r2" d="M60 170 C 200 205, 360 195, 500 150" />
          <circle className="ring" cx="60" cy="170" r="7" />
          <circle className="dot hub" cx="60" cy="170" r="6" />
          <circle className="dot" cx="500" cy="110" r="5" />
          <circle className="dot" cx="500" cy="150" r="5" />
          <circle className="dot" r="3.5">
            <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#r1" /></animateMotion>
          </circle>
          <circle className="dot" r="3.5">
            <animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#r2" /></animateMotion>
          </circle>
          <text x="40" y="198">DUBAI</text>
          <text x="440" y="90">MARKETS</text>
        </svg>
      </div>
    </section>
  );
}