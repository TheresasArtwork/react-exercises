import { useEffect, useState } from "react";

export function InputFieldEffect() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const multiplier = 5;

  useEffect(() => {
    setResult(() => value * multiplier);
  }, [value]);

  return (
    <div className="input-field-container">
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <p>
        {value
          ? `You entered ${value}. Multiplied by ${multiplier}, that equals ${result}.`
          : `Please enter a value.`}
      </p>
    </div>
  );
}
