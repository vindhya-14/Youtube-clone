import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-16 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/" >
        <img
          className="h-16"
          alt="youtube-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
        </a>
      </div>
      <div className="col-span-10 px-10 py-6 ">
        <input
          className=" w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 px-10 py-6">
        <img
          className="h-10"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
        />
      </div>
    </div>
  );
};

export default Head;
