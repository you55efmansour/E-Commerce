import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "./App";
import { HashRouter } from "react-router-dom";
AOS.init({
  duration: 1000, // Duration of animations in milliseconds
  // You can customize AOS settings here if needed
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
