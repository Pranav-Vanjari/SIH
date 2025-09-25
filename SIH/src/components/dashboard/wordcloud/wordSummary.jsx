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
          The organization has strengthened its regulatory compliance framework, ensuring all operations adhere to legal and industry standards. Monitoring and reporting mechanisms have been enhanced to reduce risks, while ongoing training ensures employees stay updated on new regulations and policies.
        </p>
      </div>
    </div>
  </div>
);

export default WordPage;
