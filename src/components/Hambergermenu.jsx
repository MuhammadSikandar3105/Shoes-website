import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../assets/arrowright.png";

const Hambergermenu = ({ hamberger, setHamberger }) => {
  return (
    <>
      <div
        className={`hamberger-menu absolute ${
          hamberger ? "right-[13px]" : "right-[-138px]"
        } transition-all duration-300 px-4 py-5 top-[13px] bg-[#D9D9D980] w-[138px] h-[239px]`}
      >
        <ul className="flex flex-col justify-between gap-2 text-white text-sm ">
          <NavLink className="font-[700] hover:text-blue-300">Home</NavLink>
          <NavLink className="font-[700] hover:text-blue-300">
            How It Works?
          </NavLink>
          <NavLink className="font-[700] hover:text-blue-300">About</NavLink>
          <NavLink className="font-[700] hover:text-blue-300">
            Testimonials
          </NavLink>
          <NavLink className="font-[700] hover:text-blue-300">
            Contact Us
          </NavLink>
        </ul>
        <img
          src={arrow}
          alt="arrow"
          onClick={setHamberger}
          className="absolute top-1 right-1"
        />
      </div>
    </>
  );
};

export default Hambergermenu;
