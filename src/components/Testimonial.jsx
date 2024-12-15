import React from "react";
import review3 from "../assets/Group 4.png";
import review2 from "../assets/Group 5.png";
import review1 from "../assets/Mask group.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonilas bg-testimonial  bg-black/70 backdrop-blur-sm max-w-[1440px] w-full mx-auto bg-cover md:bg-contain md:px-16 px-7 bg">
        <h2 className="md:text-4xl text-3xl font-[700] text-center pt-6">
          What People are saying about <br /> THE SHOE COMPANY ?
        </h2>
        <div className="reviews flex items-center justify-between flex-wrap md:mt-32 mt-3 md:flex-row flex-col pb-12">
          <div className="review1 flex flex-col justify-between items-center gap-4 md:my-0 my-4">
            <img
              src={review1}
              alt="reviw1"
              className="lg:max-w-[255px] max-w-[180px] w-full"
            />
            <p className="lg:max-w-[200px] md:max-w-[180px] max-w-[400px] w-full text-5 font-[400] text-center  ">
              “Looking for shoes that are built just for you? THE SHOE COMPANY
              is the way. Love the design and build quality.”
            </p>
          </div>
          <div className="review1 flex flex-col justify-between items-center gap-4 md:my-0 my-4">
            <img
              src={review3}
              alt="revew2"
              className="lg:max-w-[295px] max-w-[220px] w-full"
            />
            <p className="lg:max-w-[200px] md:max-w-[180px] max-w-[400px] w-full text-5 font-[400] text-center ">
              “I love the shoes, the quality, and everyting. They are worth the
              investment!”
            </p>
          </div>
          <div className="review1 flex flex-col justify-between  items-center gap-4 md:my-0 my-4">
            <img
              src={review2}
              alt="review3"
              className="lg:max-w-[255px] max-w-[180px] w-full"
            />
            <p className="lg:max-w-[200px] md:max-w-[180px] max-w-[400px] w-full text-5 font-[400] text-center  ">
              “They make the best and forever lasting shoes. Superb fit and
              confort is literally the next level. Much recommended!”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
