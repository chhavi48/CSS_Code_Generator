import React from "react";

interface PreviewProps {
  shadow: string;
  borderRadius: number;
  translateX: number;
  translateY: number;
  skewX: number;
  skewY: number;
  rotate: number;
}

const Preview: React.FC<PreviewProps> = ({
  shadow,
  borderRadius,
  translateX,
  translateY,
  skewX,
  skewY,
  rotate,
}) => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#48A3EE",
    boxShadow: shadow,
    borderRadius: `${borderRadius}px`,
    transform: `translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg) rotate(${rotate}deg)`, // Apply Translate Y, Skew X, Skew Y, and Rotate
    margin: "20px",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Preview</h2>
      <div style={boxStyle}></div>
    </div>
  );
};

export default Preview;
