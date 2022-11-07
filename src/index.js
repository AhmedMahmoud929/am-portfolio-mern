import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/index.css";

import { AuthState } from "./contexts/authContext";
import { DashState } from "./contexts/dashContext";
import { PortState } from "./contexts/portContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthState>
        <DashState>
          <PortState>
            <App />
          </PortState>
        </DashState>
      </AuthState>
    </HashRouter>
  </React.StrictMode>
);
