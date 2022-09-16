import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { App } from "./App";
// import { Parent } from "./Parent";
import reportWebVitals from "./reportWebVitals";
// import { Greeting } from "./components/Greeting";
import { Names } from "./components/Names";

const root = ReactDOM.createRoot(document.querySelector(".index"));
root.render(
  <React.StrictMode>
    {/* <App name="Harry Potter - self closed" /> */}
    {/* <App name="Harry Potter - normal tag">
      <h2>head tag inside app</h2>
    </App> */}
    {/* <Parent /> */}
    {/* <Greeting /> */}
    <Names />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
