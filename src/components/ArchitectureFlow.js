import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

function ArchitectureFlow({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="architecture-flow" role="list" aria-label="Architecture flow">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="architecture-step" role="listitem">
            {step}
          </div>
          {index < steps.length - 1 && (
            <FiArrowDown className="architecture-arrow" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ArchitectureFlow;
