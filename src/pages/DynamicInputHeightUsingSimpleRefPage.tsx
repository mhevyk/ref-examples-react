import { useEffect, useRef, useState } from "react";

export default function DynamicInputHeightUsingSimpleRefPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(inputRef.current);
    setHeight(inputRef.current?.getBoundingClientRect()?.height ?? 0);
  }, [inputRef.current]);

  return (
    <>
      <h1>Problem</h1>
      <button onClick={() => setIsOpen((prev) => !prev)}>Toggle</button>
      {isOpen && <input ref={inputRef} placeholder="Enter value..." />}
      <h2>The above input is {Math.round(height)}px tall</h2>
    </>
  );
}
