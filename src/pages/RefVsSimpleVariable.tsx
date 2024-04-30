import { useState, useRef } from "react";

export default function RefVsSimpleVariable() {
  let numberFromVariable = 0;
  const ref = useRef(0);

  const [, setRerenderCount] = useState(0);

  const firstClick = () => {
    numberFromVariable++;
    ref.current++;
    console.log({ numberFromVariable, numberFromRef: ref.current });
  };

  const secondClick = () => {
    setRerenderCount((count) => count + 1);
  };

  return (
    <div>
      <h1>From variable: {numberFromVariable}</h1>
      <h2>From ref: {ref.current}</h2>
      <button onClick={firstClick}>Increment values</button>
      <button onClick={secondClick}>Trigger rerender</button>
    </div>
  );
}
