import React from "react";
import shoes from "../assets/the-white-shoe-hero-image 1.png";
import background from "../assets/background-road-share 1.png";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="bg-cover md:bg-contain bg-no-repeat bg-right pt-24 md:pt-36 section-container max-w-[1440px] mx-auto px-6 md:px-8"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-[54px] md:leading-[92px]">
            THE <br /> SHOE <br /> COMPANY
          </h1>
          <div>
            <img className="w-full max-w-xl" src={shoes} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
