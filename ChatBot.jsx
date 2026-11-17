import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Mail, RotateCcw } from 'lucide-react';
import { chatBot, company } from '../data/content';
import '../styles/chatbot.css'; // loads its own styles

const { steps } = chatBot;
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const WaIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);      // {from:'bot'|'user', text}
  const [step, setStep] = useState(0);       // index of the question being asked
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const started = useRef(false);
  const timers = useRef([]);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const box = useRef(null);

  const finished = step >= steps.length;
  const current = steps[step];

  // bot says something after a short "typing" pause
  const botSay = (text, cb) => {
    setTyping(true);
    const t = setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text }]);
      setTyping(false);
      cb && cb();
    }, 700);
    timers.current.push(t);
  };

  // first time the window opens: greeting + first question
  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      botSay(chatBot.greeting, () => botSay(steps[0].q));
    }
    // eslint-disable-next-line
  }, [open]);

  // clean timers
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // keep the newest message in view
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [msgs, typing, open, finished]);

  // focus the input after each bot message
  useEffect(() => {
    if (open && !typing && !finished) inputRef.current?.focus();
  }, [typing, open, finished]);

  // close on Escape / outside click
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const submit = (raw) => {
    const value = raw.trim();
    if (typing || finished) return;
    if (!value) return;

    // validation
    if (current.type === 'email' && !isEmail(value)) {
      setMsgs((m) => [...m, { from: 'user', text: value }]);
      setInput('');
      botSay('That email does not look right. Please enter a valid email, for example name@company.com');
      return;
    }

    setMsgs((m) => [...m, { from: 'user', text: value }]);
    setAnswers((a) => ({ ...a, [current.key]: value }));
    setInput('');

    const next = step + 1;
    setStep(next);
    if (next < steps.length) botSay(steps[next].q);
    else botSay(chatBot.done);
  };

  const restart = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]);
    setAnswers({});
    setStep(0);
    setInput('');
    setTyping(false);
    started.current = true;
    botSay(chatBot.greeting, () => botSay(steps[0].q));
  };

  // summary text for email / WhatsApp
  const summary = steps.map((s) => `${s.label}: ${answers[s.key] || '-'}`).join('\n');
  const mailLink =
    `mailto:${company.email}?subject=${encodeURIComponent('Chat enquiry — ' + (answers.product || 'Product'))}` +
    `&body=${encodeURIComponent('Hello ASP Global team,\n\n' + summary)}`;
  const waLink = `${company.whatsapp}?text=${encodeURIComponent('Hello ASP Global team,\n\n' + summary)}`;

  const chips = !finished && !typing && current
    ? [...(current.options || []), ...(current.optional ? ['Skip'] : [])]
    : [];

  return (
    <div className={'cb' + (open ? ' is-open' : '')} ref={box}>
      {/* chat window (always rendered so it can animate in and out) */}
      <div className="cb-win" aria-hidden={!open}>
        <div className="cb-head">
          <div>
            <h4>{chatBot.title}</h4>
            <p>{chatBot.subtitle}</p>
          </div>
          <div className="cb-tools">
            <button type="button" aria-label="Restart chat" onClick={restart}><RotateCcw size={16} /></button>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button>
          </div>
        </div>

        <div className="cb-body">
          {msgs.map((m, i) => (
            <div key={i} className={'cb-msg ' + m.from}>{m.text}</div>
          ))}

          {typing && (
            <div className="cb-msg bot cb-typing"><i /><i /><i /></div>
          )}

          {/* quick replies */}
          {chips.length > 0 && (
            <div className="cb-chips">
              {chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => (c === 'Skip' ? submit('—') : submit(c))}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* final actions */}
          {finished && !typing && (
            <div className="cb-final">
              <div className="cb-sum">
                {steps.map((s) => (
                  <div key={s.key}><span>{s.label}</span><b>{answers[s.key] || '—'}</b></div>
                ))}
              </div>
              <a className="cb-act cb-mail" href={mailLink}><Mail size={17} /> Send by email</a>
              <a className="cb-act cb-wa" href={waLink} target="_blank" rel="noreferrer"><WaIcon /> Send on WhatsApp</a>
              <button className="cb-again" type="button" onClick={restart}>Start a new enquiry</button>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {!finished && (
          <form
            className="cb-foot"
            noValidate
            onSubmit={(e) => { e.preventDefault(); submit(input); }}
          >
            <input
              ref={inputRef}
              type={current?.type === 'email' ? 'email' : 'text'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={current?.placeholder || 'Type here'}
              disabled={typing}
              aria-label="Your answer"
            />
            <button type="submit" disabled={typing || !input.trim()}>Send</button>
          </form>
        )}
      </div>

      {/* round button */}
      <button
        className="cb-btn"
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="cb-face cb-closed"><MessageCircle size={28} fill="currentColor" strokeWidth={1.5} /></span>
        <span className="cb-face cb-x"><X size={26} strokeWidth={2} /></span>
      </button>
    </div>
  );
}