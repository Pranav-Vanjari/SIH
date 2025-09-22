import "./widesummary.css";

const Widesummary = ({ summaryText, title, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("widesummary-overlay")) {
      onClose();
    }
  };

  return (
    <div className="widesummary-overlay" onClick={handleOverlayClick}>
      <div className="widesummary-card">
        <button className="add-export">Add to Export</button>
        <button className="widesummary-close" onClick={onClose}>
          ✕
        </button>

        <div className="widesummary-header">
          <h2 className="widesummary-title">Detailed Summary</h2>
        </div>

        <h3 className="widesummary-section-title">{title}</h3>
        <div className="widesummary-text">{summaryText}</div>

        <div className="widesummary-section">
          <h3>Positive</h3>
          <ul>
            <li>Encourages structured submission tracking for students.</li>
            <li>Automates monitoring, reducing manual workload for teachers.</li>
            <li>Improves transparency in academic performance evaluation.</li>
          </ul>
        </div>

        <div className="widesummary-section">
          <h3>Negative</h3>
          <ul>
            <li>Complex legal jargon: The language used is difficult to understand.</li>
            <li>Ambiguity in filing procedures: The process for submitting documents is unclear.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Widesummary;
