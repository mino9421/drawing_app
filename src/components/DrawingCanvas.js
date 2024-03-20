import React from "react";
import Drawing from "./Drawing";

const DrawingCanvas = ({ backgroundImage }) => {
  return (
    <div className="drawing-canvas">
      <Drawing />
    </div>
  );
};

export default DrawingCanvas;
