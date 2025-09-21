import React, { useEffect, useRef } from "react";
import cloud from "d3-cloud";
import * as d3 from "d3";
import "./piechart.css"

const WordCloud = ({ onWordClick }) => {
  const svgRef = useRef();

  const words = [
    { text: "Audit", value: 15 },
    { text: "Compliance", value: 25 },
    { text: "Penalty", value: 20 },
    { text: "Disclosure", value: 12 },
    { text: "Transparency", value: 18 },
    { text: "Governance", value: 10 },
    { text: "Shareholders", value: 8 },
    { text: "Reporting", value: 6 },
  ];

  const seededRandom = (seed) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    const width = 400;
    const height = 350;
    const BLUE = "#0d47a1";
    const HOVER_BLUE = "#06357a";

    d3.select(svgRef.current).selectAll("*").remove();

    const layout = cloud()
      .size([width, height])
      .words(words.map((d) => ({ text: d.text, size: d.value * 2.8 })))
      .padding(6)
      .rotate(() => 0)
      .random(() => seededRandom(42))
      .font("Arial Black")
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(placedWords) {
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height);

      const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      g.selectAll("text")
        .data(placedWords)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .attr("fill", BLUE)
        .style("font-family", "Arial Black, Arial, sans-serif")
        .style("cursor", "pointer")
        .style("font-size", (d) => `${d.size}px`)
        .text((d) => d.text)
        .on("click", (event, d) => onWordClick(d.text))
        .on("mouseenter", function (event, d) {
          d3.select(this).attr("fill", HOVER_BLUE);
        })
        .on("mouseleave", function (event, d) {
          d3.select(this).attr("fill", BLUE);
        });
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
