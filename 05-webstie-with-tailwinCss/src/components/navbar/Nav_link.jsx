import React from 'react';
import { useState } from "react";
const Nav_link = () => {
    // console.log(porps)
    const [open, setOpen] = useState(false);
  return (
   <>
   
    {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-mono text-lg">
        <li className="hover:text-blue-700 cursor-pointer">About</li>
        <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        <li className="hover:text-blue-700 cursor-pointer">Feedback</li>
        <li className="hover:text-blue-700 cursor-pointer">Setting</li>
        <li className="hover:text-green-700 font-bold cursor-pointer " title='Click for Login'>Login</li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-1 w-6 bg-black transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-black transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-black transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-5 transition-all duration-300 md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <a className="hover:text-blue-700 text-lg" href="#">About</a>
        <a className="hover:text-blue-700 text-lg" href="#">Contact</a>
        <a className="hover:text-blue-700 text-lg" href="#">Feedback</a>
        <a className="hover:text-blue-700 text-lg" href="#">Setting</a>
        <a className="hover:text-blue-700 text-lg font-bold" href="#">Login</a>
      </div>
   </>
  );
}

export default Nav_link;
