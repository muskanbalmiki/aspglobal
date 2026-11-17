import { useEffect } from 'react';

export default function useSiteEffects() {
  // scroll progress bar + hero parallax
  useEffect(() => {
    const h = document.documentElement;
    const on = () => {
      h.style.setProperty('--progress', h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
      h.style.setProperty('--sy', Math.min(h.scrollTop, 900) + 'px');
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // reveal every .section when it enters the screen
  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section').forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);
}