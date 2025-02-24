import React from "react";
import MouseTracker from "./MouseTracker";

const Example = () => {
  return (
    <MouseTracker render={({ x, y }) => (
      <p>Mouse Position: {x}, {y}</p>
    )} />
  );
};

export default Example;
