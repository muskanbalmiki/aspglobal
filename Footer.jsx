import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteCredit } from '../data/content';
import '../styles/style.css'; // loads its own styles

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="sf-in">
        <img src="/asp-logo.png" alt="ASP Global LLC FZ" />
        <p className="sf-tag">Global trade. Lasting partnerships.</p>

        <div className="sf-line" />

        <small className="sf-copy">© {new Date().getFullYear()} ASP Global LLC FZ. All rights reserved.</small>

        <small className="sf-credit">
          Designed by{' '}
          <a href={siteCredit.url} target="_blank" rel="noreferrer">{siteCredit.name}</a>
        </small>

        <a className="sf-top" href="#home">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}