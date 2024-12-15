import React from "react";
import map from "../assets/Google-Maps 1.png";

const ContactUs = () => {
  return (
    <>
      <div className="about md:mt-6 py-11  max-w-[1040px] mx-auto md:pr-12 md:justify-between md:flex-row flex-col md:gap-4 flex md:items-center">
        <div className="detail md:pl-6 md:py-1 py-6 md:px-0 px-6">
          <h2 className="text-3xl md:text-4xl font-[700]">Contact Us</h2>
          <div className="description mt-6 text-md md:px-0 px-8 font-[400] max-w-[620px] w-full"></div>
          <p>
            THE SHOE COMPANY,
            <br /> Dallas, Texas, USA <br /> +1 5590 1120 9910
          </p>
        </div>
        <img
          src={map}
          alt="foot"
          className="lg:max-w-[450px] md:max-w-[390px] w-full"
        />
      </div>
    </>
  );
};

export default ContactUs;
