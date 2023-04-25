import React from "react";
import './ground.css'

const Ground = () => {
  const lineStyle = {
    background: "#ffb703",
  };

  return (
    <div className="ground">
      <div id="line1" className="line" style={lineStyle}></div>
      <div id="line2" className="line" style={lineStyle}></div>
      <div id="line3" className="line" style={lineStyle}></div>
      <div id="line4" className="line" style={lineStyle}></div>
    </div>
  );
};

export default Ground;
