import React, { lazy, Suspense, useState } from "react";
import logo from "../assets/logo.png";
import hambergericon from "../assets/hamberger.png";
import { NavLink } from "react-router-dom";

const Hamberger = lazy(() => import("./Hambergermenu"));
// import Hambergermenu from "./Hambergermenu";

const Navbar = () => {
  const [hamberger, setHamberger] = useState(false);

  const handleclick = () => {
    setHamberger((hamberger) => !hamberger);
  };

  return (
    <>
      <header className="section-container flex items-center justify-between fixed w-full max-w-[1440px] left-[50%] -translate-x-[50%] bg-black/70 backdrop-blur-sm z-10 md:px-12 px-6 pt-1">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-16 md:w-32" />
          <p className="text-[8px] -mt-4 md:text-sm  md:-mt-8">
            The Shoe Company
          </p>
        </NavLink>
        <ul className="hidden md:block lg:space-x-10 space-x-6 lg:text-2xl">
          <NavLink className="font-[500]">Home</NavLink>
          <NavLink className="font-[500]">How It Works?</NavLink>
          <NavLink className="font-[500]">About</NavLink>
          <NavLink className="font-[500]">Testimonials</NavLink>
          <NavLink className="font-[500]">Contact Us</NavLink>
        </ul>
        <img
          className={`md:hidden  ${hamberger ? "hidden" : ""}`}
          src={hambergericon}
          alt="hamberger"
          onClick={handleclick}
        />
        <Suspense fallback={<div>Loading...</div>}>
          {hamberger && (
            <Hamberger hamberger={hamberger} setHamberger={handleclick} />
          )}
        </Suspense>
      </header>
    </>
  );
};

export default Navbar;
