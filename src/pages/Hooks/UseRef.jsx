import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null); // create reference

  const handleFocus = () => {
    // access the already referenced element
    inputRef.current.focus();
  };

  const handleValue = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />

      <br /><br />

      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleValue}>Show Value</button>
    </div>
  );
};

export default UseRefExample;
