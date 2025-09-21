import React from 'react';
import './header.css';

const Header = ({ text ,selectedAmendment, setSelectedAmendment }) => (
  <header className="header">
    <div className="header-left">
      <h1>{text}</h1>
    </div>
    <div className="header-right">
      <label>Select Amendment:</label>
      <select
        value={selectedAmendment}
        onChange={(e) => setSelectedAmendment(e.target.value)}
      >
        <option value="Draft Amendment #001">Draft Amendment #001</option>
        <option value="Draft Amendment #002">Draft Amendment #002</option>
        <option value="Draft Amendment #003">Draft Amendment #003</option>
        <option value="Draft Amendment #004">Draft Amendment #004</option>
      </select>
    </div>
  </header>
);

export default Header;
