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
    <div className="flex overflow-x-auto no-scrollbar px-4 py-2 bg-white shadow-sm">
      {buttonNames.map((name, index) => (
        <Button key={`${name}-${index}`} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
