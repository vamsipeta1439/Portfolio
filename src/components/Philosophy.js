import React from 'react';
import { philosophy } from '../data/skills';
import useReveal from '../hooks/useReveal';

function Philosophy() {
  const revealRef = useReveal();

  return (
    <section className="philosophy-section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">PRINCIPLES</span>
          <h2 className="section-heading">How I Build</h2>
        </div>

        <ol className="philosophy-list">
          {philosophy.map((item, index) => (
            <li className="philosophy-item" key={item.title}>
              <span className="philosophy-index mono">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Philosophy;
