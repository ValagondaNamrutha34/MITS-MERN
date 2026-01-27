import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div>
      <h2>useState Example</h2>

      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UseState;
