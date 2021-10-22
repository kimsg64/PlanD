import { useState } from "react";

const UseToggleBGColor = () => {
  const [bgColor, setBgColor] = useState("");
  const setFocusColor = () => setBgColor("var(--color-focus)");
  const setNormalColor = () => setBgColor("");
  const toggleBGColor = () => {
    console.log(bgColor);
    bgColor === "" ? setFocusColor() : setNormalColor();
    return bgColor;
  };
  return { bgColor, setFocusColor, setNormalColor, toggleBGColor };
};

export default UseToggleBGColor;
