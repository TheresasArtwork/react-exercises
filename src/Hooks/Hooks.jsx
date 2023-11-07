import { useEffect, useState } from "react";

export function Hooks() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [countButton, setCountButton] = useState(0);

  useEffect(() => {
    if (selectedButton) {
      setCountButton((countButton) => countButton + 1);
    }
  }, [selectedButton]);

  return (
    <div className="hooks-container">
      <button onClick={() => setSelectedButton(1)}>1</button>
      <button onClick={() => setSelectedButton(2)}>2</button>
      <button onClick={() => setSelectedButton(3)}>3</button>

      <p>
        You clicked on button number <strong>{selectedButton}</strong>
      </p>
      <p>
        You have pressed <strong>{countButton}</strong> buttons in total.
      </p>
    </div>
  );
}
