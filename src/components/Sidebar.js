import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-60 p-6 shadow-lg bg-white min-h-screen text-gray-800">
      {/* Main Menu */}
      <ul className="space-y-2">
        <li>
          <a
            href="/"
            className="block px-2 py-1 rounded hover:bg-gray-100 transition"
          >
            🏠 Home
          </a>
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎬 Shorts
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          📹 Videos
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🔴 Live
        </li>
      </ul>

      {/* Subscriptions */}
      <h2 className="mt-6 mb-2 font-semibold text-gray-700 border-b pb-1">
        Subscriptions
      </h2>
      <ul className="space-y-2">
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎵 Music
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🏀 Sports
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎮 Gaming
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎥 Movies
        </li>
      </ul>

      {/* Watch Later */}
      <h2 className="mt-6 mb-2 font-semibold text-gray-700 border-b pb-1">
        Watch Later
      </h2>
      <ul className="space-y-2">
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎵 Music
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🏀 Sports
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎮 Gaming
        </li>
        <li className="px-2 py-1 hover:bg-gray-100 rounded transition">
          🎥 Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
