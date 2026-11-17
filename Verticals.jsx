import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { photo, sectors } from '../data/content';
import VerticalDetail from './VerticalDetail';
import VerticalCarousel from './VerticalCarousel'; // NEW

export default function Verticals({ selected, setSelected }) {
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // hover opens the card (desktop only, small delay to avoid flicker)
  const handleEnter = (i) => {
    if (!window.matchMedia('(min-width: 901px)').matches) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSelected(i), 120);
  };
  const handleLeave = () => clearTimeout(timer.current);

  return (
    <section id="verticals" className="section verticals">
      <div className="section-head">
        <div>
          <div className="eyebrow">02 / OUR BUSINESS VERTICALS</div>
          <h2>Four industries.<br /><span>One global perspective.</span></h2>
        </div>
        {/* <p>Explore the products and materials<br />at the heart of our business.</p> */}
      </div>

      <div className="vx">
        {sectors.map((s, i) => {
          const Icon = s.icon;
          const on = selected === i;
          return (
            <div
              key={s.name}
              className={'vx-card' + (on ? ' on' : '')}
              role="button"
              tabIndex={0}
              aria-expanded={on}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              onFocus={() => setSelected(i)}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(i)}
            >
              <img src={photo(s.img, 1400)} alt="" loading="lazy" />
              <div className="vx-shade" />
              <span className="vx-num">0{i + 1}</span>

              <div className="vx-short">
                <Icon size={26} />
                <h3>{s.name}</h3>
              </div>

              <div className="vx-open">
                <Icon />
                <h3>{s.name}</h3>
                <em>{s.label}</em>
                <p>{s.text}</p>
                <ul>
                  {s.products.map((p) => (
                    <li key={p}><Check size={16} />{p}</li>
                  ))}
                </ul>
                <a className="vx-link" href="#contact">
                  Enquire about this category <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* NEW: 3-image carousel for the open vertical */}
      <VerticalCarousel sector={sectors[selected]} />

      {/* full details for the open vertical */}
      <VerticalDetail sector={sectors[selected]} index={selected} />
    </section>
  );
}