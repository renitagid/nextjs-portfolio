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
    <div className="flex font-jost">
      <nav
        className={`${buttonMenu} absolute top-0 z-10 w-full flex-col shadow-lg shadow-gray-700 bg-gradient-to-b from-rose-300 via-red-300 to-amber-200 p-10 md:visible md:mt-5  md:flex md:w-11/12 md:flex-row md:justify-evenly
      dark:from-rose-800 dark:via-red-800 dark:to-amber-700
      md:rounded-xl md:bg-gradient-to-r md:p-3 md:shadow-lg md:shadow-gray-500 dark:shadow-black
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
