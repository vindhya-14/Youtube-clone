import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 shadow-md bg-white">
      {/* Left Section: Menu & Logo */}
      <div className="flex items-center col-span-2 gap-4">
        <img
          onClick={toggleMenuHandler}
          className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-10 object-contain"
            alt="youtube-logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>

      {/* Center Section: Search Bar */}
      <div className="col-span-8 flex justify-center">
        <div className="flex w-3/4 max-w-xl">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition">
            🔍
          </button>
        </div>
      </div>

      {/* Right Section: User Icon */}
      <div className="col-span-2 flex justify-end pr-4">
        <img
          className="h-10 w-10 rounded-full shadow hover:scale-105 transition-transform duration-200"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
        />
      </div>
    </div>
  );
};

export default Head;
