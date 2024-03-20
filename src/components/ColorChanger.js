import React, { Component } from "react";
import Konva from "konva";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text } from "react-konva";

class ColoredRect extends React.Component {
  state = {
    color: "green",
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

function ColorChanger(props) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try click on rect" />
        <ColoredRect />
      </Layer>
    </Stage>
  );
}

export default ColorChanger;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<ColorChanger />);
