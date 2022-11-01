import React, { useState, useEffect } from "react";

export function HooksDemo() {
  let [name, setName] = useState("Vasanth");

  const handleName = (name) => {
    setName(() => name);
  };

  useEffect(() => {
    console.log(name);
  }, []); // component didmount -> to make API calls

  useEffect(() => {
    console.log("dependency use effect", name);
  }, [name]);

  return (
    <div>
      <h1>name is {name}</h1>
      <button onClick={() => handleName("raj")}>change</button>
      <button onClick={() => handleName("ram")}>change</button>
    </div>
  );
}
