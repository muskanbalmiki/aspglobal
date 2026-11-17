import React from 'react';
import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { sectors, company } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent('Website enquiry — ' + f.get('sector'));
    const body = encodeURIComponent(
      'Name: ' + f.get('name') +
      '\nEmail: ' + f.get('email') +
      '\nCompany: ' + f.get('company') +
      '\n\n' + f.get('message')
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <div className="eyebrow">04 / LET’S CONNECT</div>
        <h2>Let’s open the door<br />to your next <span>opportunity.</span></h2>
        <p>Have a sourcing requirement or partnership in mind?<br />We’d like to hear from you.</p>

        <div className="contact-details">
          <a href={`mailto:${company.email}`}><Mail />{company.email}</a>
          <a href={company.phoneLink}><Phone />{company.phone}</a>
          <div>
            <MapPin />
            <span>{company.addressLine1}<br />{company.addressLine2}</span>
          </div>
        </div>

        <a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">
          Chat on WhatsApp <ArrowUpRight size={18} />
        </a>
      </div>

      <form onSubmit={submit}>
        <h3>Tell us what you need.</h3>
        <div className="fields">
          <label>Your name<input required name="name" placeholder="Full name" /></label>
          <label>Business email<input required type="email" name="email" placeholder="you@company.com" /></label>
        </div>
        <label>Company<input name="company" placeholder="Company name" /></label>
        <label>
          Business vertical
          <select name="sector">
            {sectors.map((s) => <option key={s.name}>{s.name}</option>)}
            <option>Other enquiry</option>
          </select>
        </label>
        <label>
          Your requirement
          <textarea required name="message" rows="3" placeholder="Product, quantity, destination and any other details…" />
        </label>
        <button className="button blue" type="submit">Prepare email enquiry <ArrowUpRight size={19} /></button>
        <small>
          {sent
            ? 'Your enquiry has been prepared in your email app. Please send it to complete your enquiry.'
            : 'Opens your email app with your enquiry details ready to send.'}
        </small>
      </form>
    </section>
  );
}