import React from "react";
import "./summary.css";

const Summary = ({
  summaryText,
  title = "Amendment #001 Analysis Summary:",
}) => {
  return (
    <div className="summary-container">
      <div className="summary-card">
        <div className="summary-header">
          <h2 className="summary-title">Executive Summary</h2>
        </div>
        <h3 className="summary-section-title">{title}</h3>

        <div className="summary-text">{summaryText}</div>

        <div className="summary-actions">
          <button className="summary-btn">
            <span>View in Detail</span>
          </button>

          <button className="summary-btn">
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
