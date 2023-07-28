import React from "react";
import ReactDOM from "react-dom/client";

import News from "./pages/News";

import "./style/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <News />
  </React.StrictMode>
);
