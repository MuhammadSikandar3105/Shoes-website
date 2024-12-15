import React from "react";
import shoes from "../assets/how-it-works-image 1.png";
import Heelarrow from "../assets/arrow-1 1.png";
import Front from "../assets/arrow-2 1.png";
import Traction from "../assets/arrow-3 1.png";

const HowItWorks = () => {
  return (
    <>
      <div className="mt-10 md:pb-12 pb-16">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-center mx-auto font-bold">
          Have they finally made the <br /> perfect workout shoe?
        </h2>
        <div className="mt-0 sm:mt-14 max-w-lg mx-auto lg:pt-0 sm:pt-48 sm:pb-0 pb-10 pt-52 relative">
          <img
            className="sm:w-full mx-auto w-[75%] max-w-xl lg:rotate-0 rotate-12"
            src={shoes}
            alt="shoe"
          />
          <div className="absolute lg:-translate-x-full left-12 top-20 sm:-left-2 sm:top-12 lg:-top-11 max-w-xl">
            <h1 className="sm:text-xl text-sm font-bold ">THE HEEL</h1>
            <p className="sm:text-sm text-[12px] font-[400] mt-2">
              The heel is well-built,
              <br /> has appropriate elevation <br /> and is not too rigid.
            </p>
            <img
              src={Heelarrow}
              alt="heelarrow"
              className="lg:ml-auto lg:rotate-0 sm:-ml-14 -ml-10 rotate-[74deg] sm:w-auto w-24"
            />
          </div>
          <div className="absolute lg:translate-x-[13rem] lg:top-12 top-28  right-2 sm:top-12 sm:right-10 max-w-2xl">
            <h1 className="sm:text-xl text-sm font-bold  relative">
              THE FRONT
            </h1>
            <p className="sm:text-sm text-[12px] font-[400] mt-2">
              The front is comfortable and <br /> adjusts well to the shape of
              <br /> your foot.
            </p>
            <img
              src={Front}
              alt="heelarrow"
              className="absolute lg:-top-10 lg:-translate-x-full lg:rotate-0 rotate-[130deg] sm:w-auto w-24"
            />
          </div>
          <div className="absolute sm:translate-y-2 translate-y-3 left-12 sm:bottom-0 max-w-2xl ">
            <h1 className="sm:text-xl text-sm font-bold  relative">TRACTION</h1>
            <p className="sm:text-sm text-[12px] font-[400] mt-2">
              The shoe has good <br /> traction and doesn't slip easily.
            </p>
            <img
              src={Traction}
              alt="heelarrow"
              className="absolute -top-[5rem] left-[50px] sm:w-36 w-24"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
