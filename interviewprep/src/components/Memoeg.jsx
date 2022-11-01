import React, { useState, useMemo } from "react";

export function Memoeg() {
  const [counterOne, setCountOne] = useState(0);
  const [counterTwo, setCountTwo] = useState(0);

  const increamentOne = () => {
    setCountOne((prev) => prev + 1);
  };

  const increamentTwo = () => {
    setCountTwo((prev) => prev + 1);
  };

  //useMemo is to return any thing and useEffect is use to store tha data
  //   const isEven = useMemo(() => {
  //     let i = 0;
  //     while (i < 300000000) i++;
  //     return counterOne % 2 === 0;
  //   }, [counterOne]);

  const isEven = useMemo(() => {
    console.log("checking is even");
    let i = 0;
    while (i < 3000000000) i++;
    setCountOne(1);
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={increamentOne}>CounterOne - {counterOne}</button>
        {isEven ? <span>Even</span> : <span>Odd</span>}
      </div>
      <div>
        <button onClick={increamentTwo}>counterTwo - {counterTwo}</button>
      </div>
    </>
  );
}
