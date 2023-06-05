import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { HerosApp } from "./HerosApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <HerosApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
