import { useState } from "react";

export function Currency() {
  const [firstCurrencyValue, setFirstCurrencyValue] = useState();
  const [secondCurrencyValue, setSecondCurrencyValue] = useState();

  const currencyFactor = 1.08;

  function convertToSecondCurrency(value) {
    setFirstCurrencyValue(value);
    setSecondCurrencyValue(value * currencyFactor);
  }

  function convertToFirstCurrency(value) {
    setFirstCurrencyValue(value / currencyFactor);
    setSecondCurrencyValue(value);
  }

  return (
    <div className="currency-container">
      <p className="subheadline">1 Euro entspricht</p>
      <h3 className="converted-value">{currencyFactor} US-Dollar</h3>
      <div className="input-field-container">
        <input
          name="euro"
          id="euro"
          type="number"
          placeholder="Please enter a number"
          value={firstCurrencyValue}
          onChange={(e) => convertToSecondCurrency(e.target.value)}
        />
        <label htmlFor="euro"> €</label>

        <span> = </span>

        <input
          name="dollar"
          id="dollar"
          type="number"
          placeholder="Please enter a number"
          value={secondCurrencyValue}
          onChange={(e) => convertToFirstCurrency(e.target.value)}
        />
        <label htmlFor="dollar"> $</label>
      </div>
    </div>
  );
}

// function limitedDecimalPlaces(x) {
//   return Number.parseFloat(x).toFixed(2);
// }
