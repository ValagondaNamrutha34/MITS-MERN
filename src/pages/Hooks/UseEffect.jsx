import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("useEffect Mounted");
  })

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* uses handleIncrement */}
      <button onClick={handleIncrement}>Increment Count</button>

      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>
        Increment Value
      </button>
    </div>
  );
};

export default UseEffect;
