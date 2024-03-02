import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Portal from "./components/Portal.jsx";
import "./static/css/style.css";

const portal = document.querySelector("#portal");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {createPortal(<Portal />, portal)}
    <App />
  </React.StrictMode>
);
