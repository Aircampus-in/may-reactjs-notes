import React from "react";
import "./greet.css";

export function Greet({ name }) {
  return (
    <div>
      <h1 className="greet_title">Hello {name}</h1>
    </div>
  );
}
