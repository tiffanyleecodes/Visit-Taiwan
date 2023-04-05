import React, { useState } from "react";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false); //setOpenMenu" is a function that can be used to update the value of "openMenu". The initial value of "openMenu" is set to false.
  const handleClick = () => setOpenMenu(!openMenu); //This function toggles the value of "openMenu" between true and false using the "setOpenMenu" function.

  const menuClass = openMenu ? "mobileMenu  " : "mobileMenu translate-x-full";
  const handleLinkClick = () => setOpenMenu(false);
  return (
    <div className="w-screen px-4 py-1">
      <header className="flex justify-between align-middle w-full">
        <Link to="/" className="logo">
          <img src={logo} alt=""></img>
        </Link>
        <button onClick={handleClick}>
          <MenuIcon />
        </button>
        <nav
          className={`${menuClass} fixed h-full w-3/5 bg-white  top-0 right-0 flex -translate-x-50 duration-700 justify-between align-middle px-4 text-left py-6 z-10`}
        >
          <ul className="mt-6">
            <Link to="/" onClick={handleLinkClick}>
              <li>Home</li>
            </Link>
            <Link to="/Destination">
              <li className="my-8" onClick={handleLinkClick}>
                Destination
              </li>
            </Link>
            <Link to="/Food" onClick={handleLinkClick}>
              <li>Food</li>
            </Link>
            <Link to="/Contact">
              <li className="my-8" onClick={handleLinkClick}>
                Contact
              </li>
            </Link>
          </ul>
          <CloseIcon onClick={handleClick} />
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
