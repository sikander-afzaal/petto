import React from "react";
import bg from "../Assets/confetti.png";
import dog from "../Assets/dog.png";
import o from "../Assets/o.svg";
function About() {
  return (
    <div className=" isolate w-full relative max-w-[1350px] gap-6">
      <img
        src={bg}
        className="absolute left-0 top-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <div className="lg:block flex justify-center items-start flex-col w-full lg:w-auto">
        <img src={dog} className="dog" alt="" />
        <div className="lg:h-[700px] pt-7 lg:pt-[120px]">
          <h1 className="font-medium text-[33px] sm:text-left text-center sm:text-[38px] text-black tracking-[0.2em]">
            About{" "}
            <span className="text-darkOrange font-bold">
              pett
              <img className="inline-block" src={o} alt="" />
            </span>{" "}
          </h1>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
