import React from "react";
import "./countercard.css";
import { useNavigate } from "react-router-dom";

const CountingText = ({ number, text,color="black"}) => {
  const navigate = useNavigate();
  
  // Light background colors for each sentiment
  let backgroundColor = "white"; // default light gray

  if (text === "Positive") backgroundColor = "#22c55e"; // light green
  else if (text === "Negative") backgroundColor = "#ef4443"; // light red
  else if (text === "Neutral") backgroundColor = "#6b7280"; // light yellow

  const handleOnClick = () => {
    navigate("/comments", { state: { sentiment: text } });
  };

  return (
    <div
      className="count-card"
      onClick={handleOnClick}
      style={{
        cursor: "pointer",
        color,
        backgroundColor,
      }}
    >
      <p className="count-text" style={{color}}>{text}</p>
      <p className="count-number" style={{color}}>{number}</p>
    </div>
  );
};

export default CountingText;
