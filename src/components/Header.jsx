import React from "react";
import logo from "../images/logo-no-background.png";

function Header() {
  return (
    <div className="header flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center px-4 md:px-8 py-9">
      <div className="title flex items-center gap-4 font-[gugi]">
        <img src={logo} alt="" className="w-16 md:w-28" />
        <h1 className="text-4xl md:text-5xl">Rohan Jacob</h1>
      </div>
      <div className="flex gap-4 text-xl md:gap-8 md:text-2xl font-itim">
        <h1 className="cursor-pointer">About Me</h1>
        <a className="cursor-pointer" href="#showcase">
          Projects
        </a>
        <h1 className="cursor-pointer">Contact Me</h1>
      </div>
    </div>
  );
}

export default Header;
