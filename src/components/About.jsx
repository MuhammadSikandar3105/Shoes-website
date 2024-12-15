import React from "react";
import foot from "../assets/Group 14.png";
import foot2 from "../assets/Group 15.png";

const About = () => {
  return (
    <>
      <hr className="md:hidden border-[#D9D9D980]" />
      <div className="about md:mt-6 my-11  max-w-[1440px] md:pr-12 justify-center md:flex-row flex-col md:gap-4 flex items-center md:px-0 px-6 ">
        <h2 className="text-3xl font-[700] mb-6 md:hidden block">About Us!</h2>
        <img
          src={foot}
          alt="foot"
          className="lg:max-w-[450px] md:max-w-[390px] md:block hidden h-[650px] w-full"
        />
        <img
          src={foot2}
          alt="foot"
          className="md:hidden max-w-[600px] w-full"
        />
        <div className="detail md:pl-6 ">
          <h2 className="text-4xl font-[700] md:block hidden">About Us!</h2>
          <div className="description text-md md:px-0 px-8 font-[400] max-w-[620px] w-full">
            <p className="mt-6">
              For each one of those shoe sweethearts out there, THE SHOE COMPANY
              offer the one-stop goal to pick the correct match of footwear.
            </p>
            <p className="md:mt-6 md:block hidden">
              Gone are the days when you needed to go from store to store to
              locate the correct style and size for yourself.
            </p>
            <p className="mt-6">
              At THE SHOE COMPANY, you can locate a vast accumulation of dashing
              footwear in all sizes and styles, all inside a couple of snaps.
            </p>
            <p className="md:mt-6 md:block hidden">
              Simple right? Not just we are here to spare your time, we are
              putting forth you the most dazzling footwear alternatives from all
              the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At
              ‘Organization Name’, we offer men, ladies, and child’s shoes
              perfect for any and each event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
