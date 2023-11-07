import { useEffect, useState } from "react";

export function InputFieldEffect() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);
  const multiplier = 5;

  useEffect(() => {
    setSum(() => value * multiplier);
  }, [value]);

  return (
    <div className="input-field-container">
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <p>
        You entered {value}. Multiplied by {multiplier}, that equals {sum}
      </p>
    </div>
  );
}
