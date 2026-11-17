import React from 'react';
import { principles } from '../data/content';

export default function Approach() {
  return (
    <section id="approach" className="section approach">
      <div className="approach-top">
        <div className="eyebrow light">03 / THE ASP GLOBAL APPROACH</div>
        <h2>Trade built on understanding.<br />Partnerships built on trust.</h2>
        <p>Every requirement is different. We bring a focused, collaborative approach to yours.</p>
      </div>

      <div className="principles stagger">
        {principles.map(([n, title, desc]) => (
          <div key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}