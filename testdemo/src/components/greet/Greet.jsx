import React from "react";
import "./greet.css";

export function Greet({ name }) {
  return (
    <div>
      <h1 className="greet_title">{name ? `Hello !!! ${name}` : `Guest`}</h1>
    </div>
  );
}
