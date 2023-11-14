import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { Card } from "../Card/Card";
import { Hooks } from "../Hooks/Hooks";
import { InputField } from "../InputField/InputField";
import { InputFieldEffect } from "../InputField/InputFieldEffect";

export default function Exercises() {
  return (
    <>
      <h1>Here are my exercises from university</h1>
      <InputFieldEffect />
      <InputField />
      <Hooks />
      <Card logo={reactLogo} title={"React"} link={"https://react.dev"} />
      <Card logo={viteLogo} title={"Vite"} link={"https://vitejs.dev"} />
    </>
  );
}
