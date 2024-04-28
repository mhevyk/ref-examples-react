import { useCallback, useState } from "react";
import catImageUrl from "../assets/cat.png";

export default function DynamicImageHeightPage() {
  const [count, setCount] = useState(1);
  const [catImageHeight, setCatImageHeight] = useState(0);

  const measuredRef = useCallback((image: HTMLImageElement) => {
    function handleLoad() {
      setCatImageHeight(image.getBoundingClientRect().height);
      image.removeEventListener("load", handleLoad);
    }

    if (image !== null) {
      image.addEventListener("load", handleLoad);
    } else {
      setCatImageHeight(0);
    }
  }, []);

  const shouldShowImageOfCat = count % 3 === 0;

  return (
    <div>
      <h1>Dynamic image ref</h1>
      <h3>render №{count}</h3>
      <p>Cat image height is: {catImageHeight}</p>
      <button onClick={() => setCount((c) => c + 1)}>Next render</button>
      <br />
      {shouldShowImageOfCat && (
        <img
          ref={measuredRef}
          src={catImageUrl}
          alt="cat"
        />
      )}
    </div>
  );
}
