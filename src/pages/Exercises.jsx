import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../pageStyles/exercises.css";
import { Card } from "../Card/Card";
import { Hooks } from "../Hooks/Hooks";
import { InputField } from "../InputField/InputField";
import { InputFieldEffect } from "../InputField/InputFieldEffect";
import { Vacation } from "../Vacation/Vacation";
import { Currency } from "../Currency/Currency";
import { Searchfunction } from "../Searchfunction/Searchfunction";

export default function Exercises() {
  return (
    <>
      <div className="content-container">
        <h1>Here are my exercises from university</h1>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 1: Cards</h2>
          <p>
            Task: Build a component card. This component should contain at least
            3 props. Call this component twice.
          </p>
          <Card logo={reactLogo} title={"React"} link={"https://react.dev"} />
          <Card logo={viteLogo} title={"Vite"} link={"https://vitejs.dev"} />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 2: Button</h2>
          <p>
            Task: Build a Hooks component. On the one hand, this should indicate
            which button was last pressed. It should also count how many
            different buttons have been clicked.
          </p>
          <Hooks />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 3: Input Fields</h2>
          <p>
            Task: Build an Input Field component. The number entered should be
            multiplied by 2 and the result displayed in a paragraph below.
            <strong> UseState</strong> is to be used.
          </p>
          <InputField />

          <p>
            <br></br>
            Advanced Task: Create an input field component. The number entered
            should be multiplied by 5 and the result displayed in a paragraph
            below. <strong>UseState</strong> and <strong>UseEffect</strong>{" "}
            should be used.
          </p>
          <InputFieldEffect />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 4: Dream Vacation</h2>
          <p>
            Task: Create a new component. Two buttons should be defined in this
            component. When one is selected, an image should appear. If the
            other is pressed, a different image should appear. If no selection
            has been made, no image should appear at all.
          </p>
          <Vacation />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 5: Currency Calculator</h2>
          <p>
            Task: Create a new component. You have two input fields. One
            displays the current euro value you enter, the other the calculated
            dollar value.
          </p>
          <Currency />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-header">Class 6: Search Function</h2>
          <p>
            Task: Create a new component. In this component is an Array with all
            months of a year. Create an input field in which you can search a
            specific month which will be shown underneath the input field.
          </p>
          <Searchfunction />
        </section>
      </div>
    </>
  );
}
