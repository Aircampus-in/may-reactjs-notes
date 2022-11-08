import React, { useState, useEffect } from "react";

export function Skills({ skills }) {
  //   skills = ["HTML", "CSS", "JavaScript"];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  });

  return (
    <div>
      <p>Welcome to Air campus</p>
      <ul>
        {skills?.map((skill) => (
          <li key={skill}> I have {skill} skill</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
}
