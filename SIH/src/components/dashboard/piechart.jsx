import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './piechart.css';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const chartData = {
    labels: ['Negative', 'Neutral', 'Positive'],
    datasets: [{
      data: [28, 30, 42],
      backgroundColor: ['#ef4444', '#6b7280', '#22c55e'],
      borderWidth: 4,
      borderColor: '#ffffff',
      borderRadius: 10,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // hide default legend
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
      datalabels: {
        color: 'white',
        font: { weight: 'bold', size: 14 },
        formatter: (value) => `${value}%`,
      },
    }
  };


  return (
    <div className="chart-card">
      <h2 className="chart-title pie-title">Sentiment Distribution</h2>
      <div className="pie-chart-container" >
        <Pie data={chartData} options={options} plugins={[ChartDataLabels]}  />
      </div>
      <div className="chart-legend">
        {chartData.labels.map((label, index) => (
          <div
            key={label}
            className="legend-item"
            style={{ cursor: 'pointer' }}
          >
            <div
              className="legend-color"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            ></div>
            <p className="legend-label">{label}</p>
            <p className="legend-value">{chartData.datasets[0].data[index]}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
