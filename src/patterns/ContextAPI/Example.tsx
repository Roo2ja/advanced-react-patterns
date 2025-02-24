import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
        marginTop: "10px"
      }}
    >
      Toggle Theme
    </button>
)
};

const Example = () => (
    <ThemeButton />
);

export default Example;
