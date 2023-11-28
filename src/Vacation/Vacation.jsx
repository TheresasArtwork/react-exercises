import { useState } from "react";
import beachImage from "../assets/beach1280.jpg";
import winterImage from "../assets/winter-landscape1280.jpg";
import "./Vacation.css";

export function Vacation() {
  const [image, setImage] = useState();

  return (
    <div className="vacation-container">
      <h3>Choose your dream vacation!</h3>
      <div className="button-container">
        <button
          className={image === winterImage ? "button-active" : ""}
          onClick={() => setImage(winterImage)}
        >
          Winter Wonderland
        </button>
        <button
          className={image === beachImage ? "button-active" : ""}
          onClick={() => setImage(beachImage)}
        >
          Tropical Island
        </button>
      </div>
      <div className="image-container">
        <img src={image}></img>
      </div>
    </div>
  );
}
