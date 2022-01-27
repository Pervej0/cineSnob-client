import React, { useRef, useState } from "react";
import "./Header.css";
// import "./HeaderQuery";
import { NavLink } from "react-router-dom";
import Logo from "../../../Common/Images/logo.png";
import useFirebase from "../../../Hook/useFirebase";

const Header = () => {
  const containerRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const { logOut, user } = useFirebase();
  const handleMenuBtn = () => {
    if (!isClicked) {
      containerRef.current.classList.remove("hidden");
      return setIsClicked(true);
    } else {
      containerRef.current.classList.add("hidden");
      return setIsClicked(false);
    }
  };
  return (
    <header className="absolute w-full">
      <nav className="flex items-center bg-transparent p-3 flex-wrap md:px-14">
        <NavLink
          to="/"
          className="p-2 mr-4 inline-flex items-center brand-name"
        >
          <img width={150} src={Logo} alt="" />
        </NavLink>
        <button
          className="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-gray-300 leading-4	border font-semibold outline-none nav-toggler"
          data-target="#navigation"
          onClick={handleMenuBtn}
        >
          MENU
        </button>
        <div
          ref={containerRef}
          className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            {user ? (
              <>
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
                >
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
                >
                  <span>About</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
                >
                  <span>Contact Us</span>
                </NavLink>
                <button
                  className="border border-2 text-white py-1 font-semibold ml-2 px-3"
                  onClick={logOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
                >
                  <span>Register</span>
                </NavLink>
                <NavLink
                  to="/signin"
                  className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
                >
                  <span>Sign In</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
