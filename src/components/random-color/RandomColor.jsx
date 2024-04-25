//TODO: Convert RGB to HEX and vice-versa

import { useEffect, useState } from "react";
import "./randomColor-styles.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleColorChange(type) {
    setColorType(type);
  }

  function randomNumber(length) {
    let random = Math.floor(Math.random() * length);
    return random;
  }

  function generateColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) hexColor += hex[randomNumber(hex.length)];

    let rgbColor = `rgb(
        ${randomNumber(255)},
        ${randomNumber(255)},
        ${randomNumber(255)})`;

    setColor(colorType === "hex" ? hexColor : rgbColor);
  }
  useEffect(() => {
    generateColor();
  }, [colorType]);

  return (
    <div className="color-wrapper">
      <h3>P2. Random Color🎨 Generator</h3>
      <div className="sub-wrapper" style={{ backgroundColor: `${color}` }}>
        <button className="color-btn" onClick={() => handleColorChange("hex")}>
          HEX
        </button>
        <button className="color-btn" onClick={() => handleColorChange("rgb")}>
          RGB
        </button>
        <button className="color-btn" onClick={generateColor}>
          Generate Color
        </button>
        <div className="content">
          <h1>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}
