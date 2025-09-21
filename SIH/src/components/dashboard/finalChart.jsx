import React, { useState } from "react";
import Chart from "./Chart";
import Sentimentchart from "./sentimentchart";
import "./finalChart.css";

function FinalChart() {
  const [selectedChart, setSelectedChart] = useState(false);

  const handleChartClick = () => setSelectedChart(true);
  const closeChart = () => setSelectedChart(false);

  return (
    <div className="final-chart-container">
      <div className={`content-wrapper ${selectedChart ? "blur-bg" : ""}`}>
        <Sentimentchart handleChartClick={handleChartClick} />
      </div>

      {selectedChart && <Chart closeChart={closeChart} />}
    </div>
  );
}

export default FinalChart;
