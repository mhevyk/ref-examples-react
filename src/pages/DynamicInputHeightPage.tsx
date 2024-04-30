import { useCallback, useState } from "react";

export default function DynamicInputHeightPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const inputRef = useCallback((input: HTMLInputElement | null) => {
    if (input === null) {
      console.log("component unmounts here");
      setHeight(0);
      return;
    }

    console.log("component mounts here");
    setHeight(input.getBoundingClientRect().height ?? 0);
  }, []);

  return (
    <>
      <h1>Dynamic input ref</h1>
      <button onClick={() => setIsOpen((prev) => !prev)}>Toggle</button>
      {isOpen && <input ref={inputRef} placeholder="Enter value..." />}
      <h2>The above input is {Math.round(height)}px tall</h2>
    </>
  );
}
