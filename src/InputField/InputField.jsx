import { useState } from "react";

export function InputField() {
  const [value, setValue] = useState(0);
  let multiplier = 2;
  let sum = value * multiplier;

  return (
    <div className="input-field-container">
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <p>
        You entered {value}. Multiplied by {multiplier}, that equals {sum}
      </p>
    </div>
  );
}
