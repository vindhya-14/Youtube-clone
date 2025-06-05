import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="button"
      className="px-5 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
    >
      {name}
    </button>
  );
};

export default Button;
