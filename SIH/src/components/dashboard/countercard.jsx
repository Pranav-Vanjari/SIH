import React from "react";
import "./countercard.css";
import { useNavigate } from "react-router-dom";

const CountingText = ({ number, text, color = "black" }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (text === "Positive") {
      navigate("/comments", { state: { sentiment: "Positive" } });
    } else if (text === "Negative") {
      navigate("/comments", { state: { sentiment: "Negative" } });
    } else if (text === "Neutral") {
      navigate("/comments", { state: { sentiment: "Neutral" } });
    } else {
      navigate("/comments", { state: { sentiment: "All Sentiments" } });
    }
  };

  return (
    <div className="count-card" onClick={handleOnClick} style={{ cursor: "pointer" }}>
      <p className="count-text" style={{ color } }>{text}</p>
      <p className="count-number" style={{ color}}>{number}</p>
    </div>
  );
};

export default CountingText;
