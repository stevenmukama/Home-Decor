import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, useTheme } from "./helpers/ThemeContext";
import "./index.css";

const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </React.StrictMode>
);
