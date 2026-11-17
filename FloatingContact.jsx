import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MessagesSquare, X } from 'lucide-react';
import { company } from '../data/content';
import '../styles/floating.css'; // loads its own styles

/* WeChat logo (lucide has none) */
const WeChatIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.4 3C5.3 3 2 5.7 2 9.1c0 1.9 1 3.6 2.6 4.7l-.7 2.1 2.5-1.3c.8.2 1.6.4 2.5.4h.5a5.5 5.5 0 0 1-.3-1.7c0-3.1 3-5.6 6.7-5.6h.4C16.9 5 13.5 3 9.4 3Zm-2.7 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5.4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    <path d="M22 14.3c0-2.8-2.7-5-6-5s-6 2.2-6 5 2.7 5 6 5c.7 0 1.4-.1 2-.3l2 1.1-.6-1.8c1.5-.9 2.6-2.4 2.6-4Zm-7.9-1.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3.8 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
  </svg>
);

const emptyForm = { name: '', email: '', message: '', policy: false };

/* copy text; falls back for browsers/pages where navigator.clipboard is blocked */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);         // the 4-option menu
  const [formOpen, setFormOpen] = useState(false); // the Email Request popup
  const [wechatShown, setWechatShown] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const box = useRef(null);
  const wTimer = useRef(null);

  const active = open || formOpen; // main button shows the X when either is open

  // outside click closes everything; Escape closes everything
  useEffect(() => {
    const onClick = (e) => {
      if (box.current && !box.current.contains(e.target)) {
        setOpen(false);
        setFormOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); setFormOpen(false); }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
      clearTimeout(wTimer.current);
    };
  }, []);

  // Email Now -> opens the email app (Outlook if it is the default), no login page
  const emailNowLink =
    'mailto:' + company.email +
    '?subject=' + encodeURIComponent('Enquiry from ASP Global website');

  // WeChat: copy the ID and show it on screen for a few seconds
  const showWechat = async () => {
    const ok = await copyText(company.wechat);
    setCopied(ok);
    setWechatShown(true);
    clearTimeout(wTimer.current);
    wTimer.current = setTimeout(() => setWechatShown(false), 6000);
  };

  // main button: close whatever is open, otherwise open the menu
  const toggle = () => {
    if (formOpen) { setFormOpen(false); return; }
    setOpen(!open);
  };

  // Email Request -> close menu, open popup form
  const openForm = () => {
    setOpen(false);
    setWechatShown(false);
    setSent(false);
    setFormOpen(true);
  };

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  // Send -> opens the visitor's email app with the form filled in
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Website enquiry from ' + form.name);
    const body = encodeURIComponent(
      'Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(emptyForm);
  };

  const tab = open ? 0 : -1; // keep hidden links out of keyboard focus

  return (
    <div
      className={'fc' + (active ? ' is-open' : '') + (open ? ' menu-open' : '') + (formOpen ? ' form-open' : '')}
      ref={box}
    >
      {/* ---------- popup form (Email Request) ---------- */}
      <div className="fm" aria-hidden={!formOpen}>
        <button className="fm-close" type="button" aria-label="Close form" tabIndex={formOpen ? 0 : -1} onClick={() => setFormOpen(false)}>
          <X size={20} strokeWidth={2.2} />
        </button>

        <div className="fm-head">Send email for us</div>

        <form className="fm-body" onSubmit={submit}>
          <label>
            <span>Name <i>*</i></span>
            <input name="name" required value={form.name} onChange={onChange} placeholder="Your Name" tabIndex={formOpen ? 0 : -1} />
          </label>

          <label>
            <span>Email <i>*</i></span>
            <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="Input your email" tabIndex={formOpen ? 0 : -1} />
          </label>

          <label>
            <span>Message <i>*</i></span>
            <textarea name="message" rows="3" required value={form.message} onChange={onChange} placeholder="Write your message" tabIndex={formOpen ? 0 : -1} />
          </label>

          <label className="fm-policy">
            <input name="policy" type="checkbox" required checked={form.policy} onChange={onChange} tabIndex={formOpen ? 0 : -1} />
            <span>Accept policy <i>*</i></span>
          </label>

          <button className="fm-send" type="submit" tabIndex={formOpen ? 0 : -1}>Send</button>

          {sent && <p className="fm-note">Your email app has opened with your message. Please press send there to complete it.</p>}
        </form>
      </div>

      {/* ---------- 4-option menu ---------- */}
      <div className="fc-menu" role="menu" aria-hidden={!open}>
        <a className="fc-item" style={{ '--i': 0 }} role="menuitem" tabIndex={tab} href={emailNowLink}>
          <span className="fc-ico fc-orange"><Mail size={24} strokeWidth={1.8} /></span>
          <span className="fc-label">Email Now</span>
        </a>

        <a className="fc-item" style={{ '--i': 1 }} role="menuitem" tabIndex={tab} href={company.phoneLink}>
          <span className="fc-ico fc-green"><Phone size={24} fill="currentColor" strokeWidth={1.5} /></span>
          <span className="fc-label">Call Request</span>
        </a>

        <button className="fc-item" style={{ '--i': 2 }} role="menuitem" tabIndex={tab} type="button" onClick={showWechat}>
          <span className="fc-ico fc-dark"><WeChatIcon size={26} /></span>
          <span className="fc-label">WeChat</span>
        </button>

        {/* WeChat ID shown after click */}
        {wechatShown && (
          <div className="fc-wechat" role="status">
            <small>WeChat ID {copied ? '(copied)' : ''}</small>
            <b>{company.wechat}</b>
          </div>
        )}

        <button className="fc-item" style={{ '--i': 3 }} role="menuitem" tabIndex={tab} type="button" onClick={openForm}>
          <span className="fc-ico fc-dark"><Mail size={24} strokeWidth={1.8} /></span>
          <span className="fc-label">Email Request</span>
        </button>
      </div>

      {/* ---------- round button ---------- */}
      <button
        className="fc-btn"
        aria-label={active ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={active}
        onClick={toggle}
      >
        <span className="fc-blue" />
        <span className="fc-main">
          <span className="fc-face fc-closed">
            <MessagesSquare size={32} strokeWidth={2} />
            <b>Online<br />Chat</b>
          </span>
          <span className="fc-face fc-x">
            <X size={30} strokeWidth={1.6} />
          </span>
          <i className="fc-dot" />
        </span>
      </button>
    </div>
  );
}