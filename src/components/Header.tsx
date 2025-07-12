import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-40 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi there, I'm</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Shawn Zhang</code>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
        <code>Computer Engineering, 2026 at UC Santa Barbara</code>
      </button>
    </div>
  );
}

export default Header;
