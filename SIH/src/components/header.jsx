import React from 'react';
import './header.css';

const Header = ({ text ,selectedAmendment, setSelectedAmendment }) => (
  <header className="header">
    <div className="header-left">
      <h1>{text}</h1>
    </div>
    <div className="header-right">
      <label>Select Chapter:</label>
      <select
        value={selectedAmendment}
        onChange={(e) => setSelectedAmendment(e.target.value)}
      >
        <option value="Draft Amendment #001">Draft Chapter #001</option>
        <option value="Draft Amendment #002">Draft Chapter #002</option>
        <option value="Draft Amendment #003">Draft Chapter #003</option>
        <option value="Draft Amendment #004">Draft Chapter #004</option>
      </select>
    </div>
  </header>
);

export default Header;
