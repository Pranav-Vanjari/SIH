import "./expectation.css";

const ExpectationAnalysis = ({ expectationsData }) => {
  return (
    <>
      <div className="negative-section">
        <h3 className="negative-title">Problem Summary</h3>
        <ul className="negative-list">
          <li>
            Complex legal jargon: The language used is difficult to understand.
          </li>
          <li>
            Ambiguity in filing procedures: The process for submitting documents
            is unclear.
          </li>
        </ul>
      </div>
      <div className="expectation-container">
        <h2 className="section-title">Expectation Analysis</h2>
        <div className="expectation-grid">
          {/* Expected */}
          <div className="expectation expected">
            <h3>✅ What User Expected</h3>
            <ul>
              {expectationsData.expected.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* Got */}
          <div className="expectation got">
            <h3>❌ What They Got</h3>
            <ul>
              {expectationsData.got.map((item, index) => (
                <li key={index}>⚠ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpectationAnalysis;
