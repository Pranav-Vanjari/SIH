import React from "react";
import "./wordSummary.css";

const WordPage = ({ word, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="add-in-export">Add to Export</button>
      <button className="close-btn" onClick={onClose}>✖</button>
      <div className="modal-info">
        <h1 style={{ textAlign: "center" }}>{word}</h1>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          This is the word page. The dashboard behind is blurred.
        </p>
      </div>
    </div>
  </div>
);

export default WordPage;
