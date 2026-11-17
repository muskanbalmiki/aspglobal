import React from 'react';
import { steps } from '../data/content';

export default function Process() {
  return (
    <section className="process section">
      <div>
        <div className="eyebrow">A SIMPLE START</div>
        <h2>Your requirement.<br />Our next conversation.</h2>
      </div>

      <div className="steps stagger">
        {steps.map(([title, text], i) => (
          <div key={title}>
            <b>0{i + 1}</b>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}