import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
        className={`${buttonMenu} absolute top-0 z-20 w-full flex-col shadow-lg shadow-gray-500 bg-gradient-to-b from-rose-300 via-amber-200 to-orange-300 p-10 
        
        md:visible md:flex md:flex-row md:justify-evenly md:bg-gradient-to-r md:px-3 md:py-0.5 md:shadow-sm 

      dark:from-rose-800 dark:via-red-800 dark:to-amber-700 dark:shadow-black
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
        className="absolute top-1 right-1 z-30 md:hidden"
        onClick={handleClick}
      >
        {buttonMenu === "invisible" ? (
          <FontAwesomeIcon icon={faBars} className="text-3xl"/>
        ) : buttonMenu === "visible" ? (
          <FontAwesomeIcon icon={faXmark} className="text-3xl"/>
        ) : null}
      </button>
    </div>
  );
};

export default Header;
