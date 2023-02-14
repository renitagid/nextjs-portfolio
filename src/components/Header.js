import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import burger from "public/burger.png";

import close from "public/x.png";
import Image from "next/image";

const Header = () => {
  const [buttonMenu, setButtonMenu] = useState("invisible");
  const handleClick = () => {
    if (buttonMenu === "invisible") {
      setButtonMenu("visible");
    } else if (buttonMenu === "visible") {
      setButtonMenu("invisible");
    }
  };
  return (
    <div className="flex">
      <nav
        className={`${buttonMenu} absolute z-10 w-full flex-col border-b-2  border-gray-400 bg-gradient-to-b from-red-300 via-yellow-100 to-cyan-100 p-10 font-serif  md:visible md:mt-5  md:flex md:w-11/12 md:flex-row md:justify-evenly
      
      md:rounded-xl md:bg-gradient-to-r md:p-3 md:shadow-lg md:shadow-gray-500
      `}
      >
        <div onClick={handleClick}>
          <ActiveLink href="/">Home</ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/about-me">
            About Me
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/projects">
            Projects
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/resume">
            Resume
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/contact">
            Contact
          </ActiveLink>
        </div>
      </nav>
      <button
        className="absolute top-1 right-1 z-20 md:hidden"
        onClick={handleClick}
      >
        {buttonMenu === "invisible" ? (
          <Image src={burger} alt="burger" className="w-8" />
        ) : buttonMenu === "visible" ? (
          <Image src={close} alt="x button" className="w-8" />
        ) : null}
      </button>
    </div>
  );
};

export default Header;
