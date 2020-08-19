import React from "react";
import "./Box.css";

const Box = ({ children }) => (
  <>
    <div className="box">
      {children}
      <div className="effect-1"></div>
      <div className="effect-2"></div>
    </div>
  </>
);

export default Box;
