import React from "react";
import bg from "../Assets/confetti.png";
import review1 from "../Assets/review1.png";
import review2 from "../Assets/review2.png";
import review3 from "../Assets/review3.png";
import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.png";
function Testimonials() {
  return (
    <div className="flex-col flex justify-center items-center isolate w-full relative max-w-[1350px] gap-6 sm:text-left text-center">
      <img
        src={bg}
        className="absolute left-0 top-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <h1 className="font-medium text-[38px] text-black">
        User’s <span className="text-darkOrange">Testimonials</span>
      </h1>
      <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit
      </p>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start mt-[160px] w-full">
        <div className="relative">
          <img
            src={b1}
            className="absolute left-0 sm:left-[16%] bottom-[90%] sm:bottom-[94%]"
            alt=""
          />
          <img src={review1} alt="" />
        </div>
        <div className="flex flex-col lg:-mt-[120px] justify-start items-center lg:items-start">
          <div className="relative">
            <img
              src={b2}
              className="absolute right-[20%] sm:right-[62%] top-0"
              alt=""
            />
            <img src={review2} alt="" />
          </div>
          <div className="relative lg:self-end">
            <img src={b3} className="absolute left-[0%] top-[92%]" alt="" />
            <img src={review3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
