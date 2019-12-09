import React from "react";
import ReactDOM from "react-dom";

import App from "./container";

const WelcomeScreen = () => (
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: "800",
        alignItems: "center",
        marginBottom: "16px"
      }}
    >
      Welcome to React for Beginners&nbsp;
      <span role="img" aria-label="emoticon of infant">
        👶🏻
      </span>
    </div>
    <App />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<WelcomeScreen />, rootElement);
