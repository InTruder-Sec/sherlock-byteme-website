import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const ENDPOINT = "https://owasppccoe.azurewebsites.net/";
// const ENDPOINT = "http://localhost:8080/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { ENDPOINT };
