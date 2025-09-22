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
  { day: "Mon", Positive: 40, Negative: 20, Neutral: 30 },
  { day: "Tue", Positive: 35, Negative: 25, Neutral: 40 },
  { day: "Wed", Positive: 50, Negative: 15, Neutral: 20 },
  { day: "Thu", Positive: 45, Negative: 20, Neutral: 25 },
  { day: "Fri", Positive: 60, Negative: 10, Neutral: 15 },
  { day: "Sat", Positive: 55, Negative: 15, Neutral: 20 },
  { day: "Sun", Positive: 65, Negative: 12, Neutral: 18 },
];

const weeklyData = [
  { week: "W1", Positive: 120, Negative: 80, Neutral: 100 },
  { week: "W2", Positive: 140, Negative: 70, Neutral: 90 },
  { week: "W3", Positive: 160, Negative: 60, Neutral: 80 },
  { week: "W4", Positive: 180, Negative: 50, Neutral: 70 },
  { week: "W5", Positive: 180, Negative: 50, Neutral: 70 },
  { week: "W6", Positive: 120, Negative: 20, Neutral: 60 },
  { week: "W7", Positive: 110, Negative: 10, Neutral: 10 },
  { week: "W8", Positive: 180, Negative: 50, Neutral: 70 },
];

const monthlyData = [
  { month: "Jan-Feb", Positive: 400, Negative: 200, Neutral: 300 },
  { month: "Mar-Apr", Positive: 450, Negative: 170, Neutral: 260 },
  { month: "May-Jun", Positive: 500, Negative: 150, Neutral: 220 },
  { month: "Jul-Aug", Positive: 530, Negative: 140, Neutral: 210 },
  { month: "Sep-Oct", Positive: 530, Negative: 140, Neutral: 210 },
  { month: "Nov-Dec", Positive: 50, Negative: 40, Neutral: 10 },
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
