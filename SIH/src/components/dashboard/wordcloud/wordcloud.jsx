import React, { useEffect, useRef } from "react";
import cloud from "d3-cloud";
import * as d3 from "d3";
import "../piechart/piechart.css";

const WordCloud = ({ onWordClick }) => {
  const svgRef = useRef();

  const words = [
    { text: "Accounting", value: 14 },
    { text: "Risk", value: 20 },
    { text: "Regulation", value: 18 },
    { text: "Ethics", value: 12 },
    { text: "Oversight", value: 16 },
    { text: "Audit Trail", value: 10 },
    { text: "Internal Controls", value: 15 },
    { text: "Financial Statements", value: 22 },
    { text: "Board of Directors", value: 12 },
    { text: "Investor Relations", value: 10 },
    { text: "Compliance Officer", value: 9 },
  ];

  useEffect(() => {
    const width = 500;
    const height = 350;
    const HOVER_BLUE = "#06357a";

    d3.select(svgRef.current).selectAll("*").remove();

    // Scale font sizes
    const values = words.map(d => d.value);
    const fontScale = d3.scaleLinear()
      .domain([Math.min(...values), Math.max(...values)])
      .range([18, 56]);

    const sizedWords = words.map(d => ({ ...d, size: fontScale(d.value) }));

    // Color scale for words
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // 10 different colors

    const seededRandom = (seed) => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const layout = cloud()
      .size([width, height])
      .words(sizedWords.map(d => ({ text: d.text, size: d.size })))
      .padding(4)
      .rotate(() => 0)
      .font("Arial Black")
      .fontSize(d => d.size)
      .random(() => seededRandom(42))
      .spiral("rectangular")
      .on("end", draw);

    layout.start();

    function draw(placedWords) {
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height);

      const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      g.selectAll("text")
        .data(placedWords)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .attr("fill", (d, i) => colorScale(i)) // assign color
        .style("font-family", "Arial Black, Arial, sans-serif")
        .style("cursor", "pointer")
        .style("font-size", d => `${d.size}px`)
        .text(d => d.text)
        .on("click", (event, d) => onWordClick(d.text))
        .on("mouseenter", function() { d3.select(this).attr("fill", HOVER_BLUE); })
        .on("mouseleave", function(d, i) { d3.select(this).attr("fill", colorScale(i)); });
    }
  }, [onWordClick]);

  return (
    <div className="wc-div">
      <h2 className="chart-title">WordCloud</h2>
      <svg ref={svgRef} />
    </div>
  );
};

export default WordCloud;
