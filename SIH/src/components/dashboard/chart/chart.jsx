import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./FinalChart.css";

const daywiseData = [
  { day: "Mon", Positive: 4, Negative: 2, Neutral: 0 },
  { day: "Tue", Positive: 3, Negative: 2, Neutral: 0 },
  { day: "Wed", Positive: 5, Negative: 1, Neutral: 0 },
  { day: "Thu", Positive: 4, Negative: 2, Neutral: 5 },
  { day: "Fri", Positive: 6, Negative: 1, Neutral: 1 },
  { day: "Sat", Positive: 5, Negative: 1, Neutral: 2 },
  { day: "Sun", Positive: 6, Negative: 1, Neutral: 1 },
];

const weeklyData = [
  { week: "W1", Positive: 20, Negative:13, Neutral: 10 },
  { week: "W2", Positive: 10, Negative: 7, Neutral: 9 },
  { week: "W3", Positive: 15, Negative: 11, Neutral: 8 },
  { week: "W4", Positive: 18, Negative: 15, Neutral: 7 },
  { week: "W5", Positive: 18, Negative: 5, Neutral: 7 },
  { week: "W6", Positive: 12, Negative: 12, Neutral: 6 },
  { week: "W7", Positive: 11, Negative: 4, Neutral: 10 },
  { week: "W8", Positive: 18, Negative: 5, Neutral: 7 },
];

const monthlyData = [
  { month: "Jan", Positive: 40, Negative: 10, Neutral: 30 },
  { month: "Feb", Positive: 30, Negative: 10, Neutral: 30 },
  { month: "Mar", Positive: 25, Negative: 17, Neutral: 60 },
  { month: "Apr", Positive: 50, Negative: 70, Neutral: 20 },
  { month: "May", Positive: 90, Negative: 50, Neutral: 10 },
  { month: "Jun", Positive: 19, Negative: 15, Neutral: 20 },
  { month: "Jul", Positive: 30, Negative: 40, Neutral: 20 },
  { month: "Aug", Positive: 30, Negative: 14, Neutral: 20 },
  { month: "Sep", Positive: 50, Negative: 40, Neutral: 10 },
  { month: "Oct", Positive: 30, Negative: 14, Neutral: 21 },
  { month: "Nov", Positive: 50, Negative: 40, Neutral: 10 },
  { month: "Dec", Positive: 10, Negative: 14, Neutral: 10 },
];

const Chart = ({ closeChart }) => {
  const [timeframe, setTimeframe] = useState("day");

  const getData = () => {
    if (timeframe === "day") return daywiseData;
    if (timeframe === "week") return weeklyData;
    return monthlyData;
  };

  const getXAxisKey = () => {
    if (timeframe === "day") return "day";
    if (timeframe === "week") return "week";
    return "month";
  };

  const handleOverlayClick = (e) => {
    // Close only if clicking on the overlay, not the chart card
    if (e.target.classList.contains("chart-modal")) {
      closeChart();
    }
  };

  return ReactDOM.createPortal(
    <div className="chart-modal" onClick={handleOverlayClick}>
      <div className="chart-card">
        <button className="add-in-export1">Add to Export</button>
        <button className="close-btn" onClick={closeChart}>
          ✖
        </button>
        <div>
          <h2 className="chart-title">Sentiment Trends</h2>
          <center>
            <h3>Range(to/from)</h3>
          </center>
        </div>

        <div className="timeframe-buttons">
          <button
            className={timeframe === "day" ? "active" : ""}
            onClick={() => setTimeframe("day")}
          >
            Day
          </button>
          <button
            className={timeframe === "week" ? "active" : ""}
            onClick={() => setTimeframe("week")}
          >
            Week
          </button>
          <button
            className={timeframe === "month" ? "active" : ""}
            onClick={() => setTimeframe("month")}
          >
            Month
          </button>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={getData()}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={getXAxisKey()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Positive"
                stroke="#4caf50"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Negative"
                stroke="#f44336"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Neutral"
                stroke="#2196f3"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Chart;
