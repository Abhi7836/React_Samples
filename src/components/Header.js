import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

//https://react-icons.github.io/react-icons/
// can use any icon fontawsome,matrial icon etc

// with Icon context can change all values of icon
function Header() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "3rem" }}>
      <header>
        <h1>
          <FaReact /> Keeper
        </h1>
      </header>
    </IconContext.Provider>
  );
}

export default Header;
