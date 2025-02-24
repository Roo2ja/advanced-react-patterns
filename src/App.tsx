import React from "react";
import HigherOrderComponentExample from "./patterns/HigherOrderComponent/Example";
import RenderPropsExample from "./patterns/RenderProps/Example";
import CompoundComponentsExample from "./patterns/CompoundComponents/Example";
import { ThemeProvider, useTheme } from "./patterns/ContextAPI/ThemeProvider";
import ContextAPIExample from "./patterns/ContextAPI/Example";

const AppContent = () => {
  const { theme } = useTheme(); // Now inside ThemeProvider, so no error

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>Advanced React Patterns</h1>

      <section>
        <h2>Higher-Order Component</h2>
        <HigherOrderComponentExample />
      </section>

      <section>
        <h2>Render Props</h2>
        <RenderPropsExample />
      </section>

      <section>
        <h2>Compound Components</h2>
        <CompoundComponentsExample />
      </section>

      <section>
        <h2>Context API</h2>
        <ContextAPIExample />
      </section>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent /> {/* Now this is wrapped inside ThemeProvider */}
  </ThemeProvider>
);

export default App;
