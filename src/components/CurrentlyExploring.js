import React from 'react';
import siteConfig from '../data/siteConfig';

function CurrentlyExploring() {
  return (
    <div className="exploring-card">
      <h3 className="exploring-title">Currently Exploring</h3>
      <div className="exploring-tags">
        {siteConfig.exploring.map((item) => (
          <span className="exploring-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CurrentlyExploring;
