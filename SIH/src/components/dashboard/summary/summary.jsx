import "./summary.css";
import { useState } from "react";
import Widesummary from "./wideSummary";

const Summary = ({ summaryText, title = "Amendment #001 Analysis Summary:" }) => {
  const [showWide, setShowWide] = useState(false);

  // Close handler
  const handleClose = () => setShowWide(false);

  return (
    <>
      <div
        className="summary-container"
        onDoubleClick={() => setShowWide(true)}
      >
        <div className="summary-card">
          <div className="summary-header">
            <h2 className="summary-title">Summary</h2>
          </div>
          <h3 className="summary-section-title">{title}</h3>
          <div className="summary-text">{summaryText}</div>
        </div>
      </div>

      {showWide && (
        <Widesummary
          summaryText={summaryText}
          pros={<ul><li>Example Pro 1</li><li>Example Pro 2</li></ul>}
          cons={<ul><li>Example Con 1</li><li>Example Con 2</li></ul>}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Summary;
