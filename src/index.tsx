import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage/Homepage";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

console.log('Starting React app...');

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <Homepage />
    </ErrorBoundary>
  </StrictMode>,
);
