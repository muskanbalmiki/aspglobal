import React from 'react';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import { photo } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-visual">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85"
          alt="Global container shipping"
          loading="lazy"
        />
        <span className="about-float">
          <img src={photo('photo-1504917595217-d4dc5ebe6122', 500)} alt="" loading="lazy" />
        </span>
        <div>
          <Globe2 size={30} />
          <span>FROM DUBAI.<br />TO THE WORLD.</span>
        </div>
      </div>

      <div>
        <div className="eyebrow">01 / WHO WE ARE</div>
        <h2>Global ambition.<br /><span>Personal commitment.</span></h2>
      </div>

      <div className="about-copy">
        <p className="lead">Bridging global manufacturers with the markets that need them.</p>
        <p>ASP Global LLC FZ is a UAE-based international trading company specialising in third-port and re-export trade. We connect sourcing requirements with supply opportunities across chemicals, pharmaceutical raw materials, food products, steel and textiles.</p>
        <p>From the first conversation to the next opportunity, our focus is clear: understanding your business and building lasting trade relationships.</p>
        <a className="text-link" href="#contact">Tell us what you’re sourcing <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}