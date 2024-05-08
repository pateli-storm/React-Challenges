import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={handleClick}>Show / Hide</button>
      {show && <h1>Welocome to React Challenges</h1>}
    </>
  );
}
