import React, { useState } from "react";
import Input from "./Input";
import Preview from "./Preview";
import { SketchPicker } from "react-color"; // Import SketchPicker component
import "../App.css";

import { Typography } from "@mui/material";

const MainPage = () => {
  const [color, setColor] = useState<string>("#000000");
  const [blurRadius, setBlurRadius] = useState<number>(10);
  const [spreadRadius, setSpreadRadius] = useState<number>(0);
  const [shiftRight, setShiftRight] = useState<number>(0);
  const [shiftDown, setShiftDown] = useState<number>(0);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0); // Add Translate Y state
  const [skewX, setSkewX] = useState<number>(0); // Add Skew X state
  const [skewY, setSkewY] = useState<number>(0); // Add Skew Y state
  const [rotate, setRotate] = useState<number>(0); // Add Rotate state
  const [copied, setCopied] = useState<boolean>(false);

  const handleColorChange = (value: string) => setColor(value);
  const handleBlurRadiusChange = (value: string) =>
    setBlurRadius(parseFloat(value));
  const handleSpreadRadiusChange = (value: string) =>
    setSpreadRadius(parseFloat(value));
  const handleShiftRightChange = (value: string) =>
    setShiftRight(parseFloat(value));
  const handleShiftDownChange = (value: string) =>
    setShiftDown(parseFloat(value));
  const handleBorderRadiusChange = (value: string) =>
    setBorderRadius(parseFloat(value));
  const handleTranslateXChange = (value: string) =>
    setTranslateX(parseFloat(value));
  const handleTranslateYChange = (value: string) =>
    setTranslateY(parseFloat(value)); // Add handler for Translate Y
  const handleSkewXChange = (value: string) => setSkewX(parseFloat(value)); // Add handler for Skew X
  const handleSkewYChange = (value: string) => setSkewY(parseFloat(value)); // Add handler for Skew Y
  const handleRotateChange = (value: string) => setRotate(parseFloat(value)); // Add handler for Rotate

  const shadow = `${color} ${blurRadius}px ${spreadRadius}px ${shiftRight}px ${shiftDown}px`;

  const copyCodeToClipboard = () => {
    const codeToCopy = `width:200px;\n height:200px;\nbackground-color:#48A3EE;\nbox-shadow: ${shadow};\nborder-radius: ${borderRadius}px;\ntransform: translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg) rotate(${rotate}deg);`; // Include Translate Y, Skew X, Skew Y, and Rotate
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <div className="container">
        <div className="controls">
          <div className="color-picker">
            <Typography sx={{ p: 2 }}>Shadow Color</Typography>
            <SketchPicker
              color={color}
              onChange={(color) => handleColorChange(color.hex)}
            />
          </div>
          <div className="inputs">
            <Input
              label="Blur Radius"
              value={blurRadius.toString()}
              onChange={handleBlurRadiusChange}
            />
            <Input
              label="Spread Radius"
              value={spreadRadius.toString()}
              onChange={handleSpreadRadiusChange}
            />
            <Input
              label="Shift Right"
              value={shiftRight.toString()}
              onChange={handleShiftRightChange}
            />
            <Input
              label="Shift Down"
              value={shiftDown.toString()}
              onChange={handleShiftDownChange}
            />
            <Input
              label="Border Radius"
              value={borderRadius.toString()}
              onChange={handleBorderRadiusChange}
            />
            <Input
              label="Translate X"
              value={translateX.toString()}
              onChange={handleTranslateXChange}
            />
            <Input
              label="Translate Y"
              value={translateY.toString()}
              onChange={handleTranslateYChange}
            />
            <Input
              label="Skew X"
              value={skewX.toString()}
              onChange={handleSkewXChange}
            />
            <Input
              label="Skew Y"
              value={skewY.toString()}
              onChange={handleSkewYChange}
            />
            <Input
              label="Rotate"
              value={rotate.toString()}
              onChange={handleRotateChange}
            />
          </div>
        </div>
        <Preview
          shadow={shadow}
          borderRadius={borderRadius}
          translateX={translateX}
          translateY={translateY}
          skewX={skewX}
          skewY={skewY}
          rotate={rotate}
        />{" "}
        <div className="code-container">
          <h2>CSS Code snipped</h2>
          <pre className="code-editor">{`width:200px;\nheight:200px;\nbackground-color:#48A3EE;\nbox-shadow: ${shadow};\nborder-radius: ${borderRadius}px; \n transform: translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg)  skewY(${skewY}deg) \n rotate(${rotate}deg);`}</pre>{" "}
          <button onClick={copyCodeToClipboard}>Copy</button>
          {copied && <span className="copied-message">Copied!</span>}
        </div>
      </div>
    </>
  );
};

export default MainPage;
