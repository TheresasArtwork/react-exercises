//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./Card/Card";
import { Hooks } from "./Hooks/Hooks";
import { InputField } from "./InputField/InputField";
import { InputFieldEffect } from "./InputField/InputFieldEffect";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <InputFieldEffect />
      <InputField />
      <Hooks />
      <Card logo={reactLogo} title={"React"} link={"https://react.dev"} />
      <Card logo={viteLogo} title={"Vite"} link={"https://vitejs.dev"} />
    </>
  );
}

export default App;
