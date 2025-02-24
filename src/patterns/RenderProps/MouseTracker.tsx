import React, { JSX, useState } from "react";

const MouseTracker = ({ render }: { render: (state: { x: number; y: number }) => JSX.Element }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })} style={{ height: "200px", border: "1px solid #b9b9b9" }}>
      {render(position)}
    </div>
  );
};

export default MouseTracker;
