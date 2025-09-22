import React, { useState } from 'react';
import './solutioncard.css';

const SolutionCard = ({ id, title, description, implementationSteps }) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleMarkHelpful = () => {
    setIsHelpful(!isHelpful);
    console.log(`Solution ${id}: Mark as Helpful toggled to ${!isHelpful}`);
  };

  const handleEscalate = () => {
    setIsEscalated(!isEscalated);
    console.log(`Solution ${id}: Escalate toggled to ${!isEscalated}`);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      setIsHelpful(false);
      setIsEscalated(false);
      console.log(`Solution ${id}: Regeneration complete.`);
    }, 1500);
  };

  return (
    <div className="solution-card">
      <div className="solution-header">
        <span className="solution-id">{id}</span>
        <h3 className="solution-title">{title}</h3>
      </div>

      <p className="solution-description">{description}</p>

      <div className="solution-steps">
        <h4>Implementation Steps:</h4>
        <ul>
          {implementationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="solution-actions">
        <button onClick={handleMarkHelpful} disabled={isRegenerating} className={isHelpful ? "btn helpful active" : "btn helpful"}>
          ✅ Mark as Helpful
        </button>
        <button onClick={handleEscalate} disabled={isRegenerating} className={isEscalated ? "btn escalate active" : "btn escalate"}>
          🚨 Escalate to Team
        </button>
        <button onClick={handleRegenerate} disabled={isRegenerating} className={isRegenerating ? "btn regenerate loading" : "btn regenerate"}>
          {isRegenerating ? "🔄 Regenerating..." : "🔄 Regenerate"}
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
