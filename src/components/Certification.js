import React from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certification } from '../data/education';

function Certification() {
  return (
    <div className="certification-card">
      <div className="certification-icon" aria-hidden="true">
        <FiAward />
      </div>
      <div className="certification-body">
        <h3>{certification.name}</h3>
        <p>{certification.issuer}</p>
      </div>
      {certification.url && (
        <a
          href={certification.url}
          target="_blank"
          rel="noreferrer"
          className="certification-link"
          aria-label="View credential"
        >
          <FiExternalLink />
        </a>
      )}
    </div>
  );
}

export default Certification;
