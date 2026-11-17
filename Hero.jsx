import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import { photo, heroSlides, sectors } from '../data/content';

export default function Hero({ onSelectVertical }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  // slide 0 = Dubai intro, slides 1-4 = the four verticals
  const vIndex = slide - 1;
  const sector = vIndex >= 0 ? sectors[vIndex] : null;

  return (
    <section id="home" className="hero">
      <div className="hero-slides">
        {heroSlides.map((id, i) => (
          <img
            key={id}
            className={'hero-photo ' + (slide === i ? 'on' : '')}
            src={photo(id, 2000)}
            alt={i ? '' : 'Dubai skyline, the home of ASP Global'}
          />
        ))}
      </div>
      <div className="shade" />

      <div className="hero-inner">
        <div className="eyebrow light"><span /> ASP GLOBAL LLC FZ · DUBAI, UAE</div>
        <h1>A world of trade.<br />A partnership<br /><em>without limits.</em></h1>
        <p>Connecting essential industries with global opportunity.<br />Your next market starts with the right partner.</p>
        <div className="hero-actions">
          <a className="button green" href="#verticals">Discover our world <ArrowUpRight size={20} /></a>
          <a className="hero-secondary" href="#contact">Start a conversation <ArrowRight size={18} /></a>
        </div>
        <div className="hero-coordinate">25.2048° N / 55.2708° E<br /><span>POSITIONED FOR POSSIBILITY.</span></div>
      </div>

      {/* card that follows the slideshow and links to the matching vertical */}
      {/* {sector ? (
        <div className="hero-vertical" key={slide}>
          <span className="hv-num">0{slide} / VERTICAL</span>
          <h3>{sector.name}</h3>
          <em>{sector.label}</em>
          <p>{sector.text}</p>
          <a className="hv-link" href="#verticals" onClick={() => onSelectVertical(vIndex)}>
            Explore {sector.name} <ArrowUpRight size={16} />
          </a>
        </div>
      ) : (
        <div className="hero-vertical" key="intro">
          <span className="hv-num">DUBAI, UAE</span>
          <h3>4 business verticals</h3>
          <em>One global partner.</em>
          <p>Chemicals & pharma, food, steel and textiles, traded across borders.</p>
          <a className="hv-link" href="#verticals" onClick={() => onSelectVertical(0)}>
            See all verticals <ArrowUpRight size={16} />
          </a>
        </div>
      )} */}

      <div className="hero-bottom">
        <span>CHEMICALS & PHARMA · FOOD · STEEL · TEXTILES</span>
        <div className="dots">
          {heroSlides.map((_, i) => (
            <button key={i} aria-label={'Show image ' + (i + 1)} className={slide === i ? 'on' : ''} onClick={() => setSlide(i)} />
          ))}
        </div>
        <a href="#about">Discover ASP Global <ChevronDown size={18} /></a>
      </div>
    </section>
  );
}