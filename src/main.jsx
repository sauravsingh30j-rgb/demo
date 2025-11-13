import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Body from "./components/Body.jsx";

import './index.css' 
import App from "./App.jsx";
  
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Body />
     */}
     <App/>
  </React.StrictMode>
);
