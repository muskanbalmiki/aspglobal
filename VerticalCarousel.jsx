import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { photo } from '../data/content';
import '../styles/carousel.css'; // loads its own styles

const FALLBACK = ['photo-1578575437130-527eed3abbec', 'photo-1512453979798-5ea266f8880c'];
const src = (g) => (g.startsWith('photo-') ? photo(g, 900) : g);

export default function VerticalCarousel({ sector }) {
  // always exactly 3 images
  const images = (sector.gallery && sector.gallery.length >= 3
    ? sector.gallery
    : [sector.img, ...FALLBACK]
  ).slice(0, 3);

  const n = images.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const go = (d) => setActive((a) => (a + d + n) % n);

  // back to the first image when the vertical changes
  useEffect(() => { setActive(0); }, [sector.name]);

  // slow autoplay (pauses on hover / focus)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, n]);

  // swipe on touch screens
  const onDown = (e) => { startX.current = e.clientX; };
  const onUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  return (
    <div
      className="vc"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={sector.name + ' gallery'}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="vc-top">
        <span className="vc-eyebrow">GALLERY</span>
        <h3>{sector.name}</h3>
      </div>

      <div className="vc-stage" onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={() => (startX.current = null)}>
        {images.map((g, i) => {
          const pos = (i - active + n) % n; // 0 = center, 1 = right, n-1 = left
          const cls = pos === 0 ? 'is-active' : pos === 1 ? 'is-next' : 'is-prev';
          return (
            <figure
              key={g + i}
              className={'vc-slide ' + cls}
              aria-hidden={pos !== 0}
              onClick={() => pos !== 0 && setActive(i)}
            >
              <img src={src(g)} alt={`${sector.name} ${i + 1}`} loading="lazy" draggable="false" />
              <figcaption>
                <b>{sector.name}</b>
                <span>{i + 1} / {n}</span>
              </figcaption>
            </figure>
          );
        })}

        <button type="button" className="vc-arrow vc-prev" aria-label="Previous image" onClick={() => go(-1)}>
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <button type="button" className="vc-arrow vc-next" aria-label="Next image" onClick={() => go(1)}>
          <ChevronRight size={22} strokeWidth={2.4} />
        </button>
      </div>

      <div className="vc-dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={'Show image ' + (i + 1)}
            className={i === active ? 'on' : ''}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}