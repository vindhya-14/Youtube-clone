import React from "react";
import Button from "./Button";
const buttonNames = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Finance",
  "Cricket",
  "Live",
  "Soccer",
];
const ButtonList = () => {
  return (
    <div className="flex ">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
