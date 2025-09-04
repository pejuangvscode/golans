import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage/Homepage";
import "index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);
