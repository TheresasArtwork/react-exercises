import { useState } from "react";
import beachImage from "../assets/beach1280.jpg";
import winterImage from "../assets/winter-landscape1280.jpg";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Vacation.css";

export function Vacation() {
  const [image, setImage] = useState();

  return (
    <div className="vacation-container">
      <h3>Choose your dream vacation!</h3>
      <ButtonGroup
        size="large"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          className={image === winterImage ? "button-active" : ""}
          onClick={() => setImage(winterImage)}
        >
          Winter Wonderland
        </Button>
        <Button
          className={image === beachImage ? "button-active" : ""}
          onClick={() => setImage(beachImage)}
        >
          Tropical Island
        </Button>
      </ButtonGroup>
      <div className="image-container">
        <img src={image}></img>
      </div>
    </div>
  );
}

/*
OHNE MUI 

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
      </div>*/
