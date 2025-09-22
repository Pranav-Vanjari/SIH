import React from "react";
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

const monthlyData = [
  { month: "Jan-Feb", Positive: 400, Negative: 200, Neutral: 300 },
  { month: "Mar-Apr", Positive: 450, Negative: 170, Neutral: 260 },
  { month: "May-Jun", Positive: 500, Negative: 150, Neutral: 220 },
  { month: "Jul-Aug", Positive: 530, Negative: 140, Neutral: 210 },
  { month: "Sep-Oct", Positive: 530, Negative: 140, Neutral: 210 },
  { month: "Nov-Dec", Positive: 50, Negative: 40, Neutral: 10 },
];

const Sentimentchart = ({ handleChartClick }) => {
  return (
    <div
      className="sentiment-chart-container small-chart"
      onDoubleClick={handleChartClick}
    >
      <h2 className="chart-title">Sentiment Trends</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyData}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
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
  );
};

export default Sentimentchart;
