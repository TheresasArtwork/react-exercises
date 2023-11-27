import { useState } from "react";

export function InputField() {
  const [value, setValue] = useState(0);
  let multiplier = 2;
  let result = value * multiplier;

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
