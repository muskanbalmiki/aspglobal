import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div className="progress" />
      <a href="#home" className="brand">
        <img src="/asp-logo.png" alt="ASP Global LLC FZ" />
      </a>

      <nav className={menu ? 'open' : ''}>
        {navLinks.map(([title, id]) => (
          <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{title}</a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>

      <button className="menu" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>
        {menu ? <X /> : <Menu />}
      </button>
    </header>
  );
}