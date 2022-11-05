import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Globalstyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Globalstyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
