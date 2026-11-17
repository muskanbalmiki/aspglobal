import React from 'react';
import { Globe2 } from 'lucide-react';
import { strip } from '../data/content';

export default function TradeStrip() {
  return (
    <div className="trade-strip">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div className="track" key={k} aria-hidden={k ? true : undefined}>
            {strip.map((t) => (
              <span key={t}><Globe2 />{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}