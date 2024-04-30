import { useCallback, useState } from "react";
import catImageUrl from "../assets/cat.png";

export default function DynamicImageHeightPage() {
  const [count, setCount] = useState(1);
  const [catImageHeight, setCatImageHeight] = useState(0);

  const measuredRef = useCallback((image: HTMLImageElement | null) => {
    if (image === null) {
      setCatImageHeight(0);
      return;
    }

    function handleLoad() {
      if (image) {
        setCatImageHeight(image.getBoundingClientRect().height);
        image.removeEventListener("load", handleLoad);
      }
    }

    image.addEventListener("load", handleLoad);
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
        <img ref={measuredRef} src={catImageUrl} alt="cat" />
      )}
    </div>
  );
}
