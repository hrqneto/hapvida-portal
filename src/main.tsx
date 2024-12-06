import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import { AppProvider } from "./context/AppContext";
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
