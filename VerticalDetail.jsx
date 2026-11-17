import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

export default function VerticalDetail({ sector, index }) {
  return (
    // key makes the panel re-animate every time you switch vertical
    <div className="vd" key={sector.name}>
      <div className="vd-head">
        <span className="vd-num">0{index + 1}</span>
        <div>
          <h3>{sector.fullTitle}</h3>
          <p>{sector.intro}</p>
        </div>
      </div>

      <div className="vd-groups">
        {sector.groups.map((g) => (
          <div className="vd-group" key={g.title}>
            <h4>{g.title}</h4>
            {g.desc && <p>{g.desc}</p>}
            <ul>
              {g.items.map((item) => (
                <li key={item}><Check size={16} />{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {sector.note && (
        <p className="vd-note"><ShieldCheck size={20} />{sector.note}</p>
      )}
    </div>
  );
}