import React from "react";
import dog from "../Assets/dog.png";
import o from "../Assets/o.svg";
function About() {
  return (
    <div className=" isolate w-full relative max-w-[1350px] gap-6">
      <div className="lg:block flex justify-center items-start flex-col pt-3 w-full lg:w-auto">
        <img src={dog} className="dog" alt="" />
        <div className="lg:h-[700px] pt-7 lg:pt-[180px]">
          <h1 className="font-medium text-[33px] sm:text-left text-center sm:text-[38px] text-black tracking-[0.2em]">
            About{" "}
            <span className="text-darkOrange font-bold">
              pett
              <img className="inline-block" src={o} alt="" />
            </span>{" "}
          </h1>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            Having someone to walk your dog too?
          </p>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            petto Club is a platform that links pet owners with pet sitters,
            ensuring your pets receive the best service with the continuous
            care, love, attention and protection that they deserve.
          </p>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            petto Club offers 6 services; you can choose from Boarding, Day
            Care, Dog Walking, Drop-in Visit, Overnight Sitting and Pet Sitting.
            We are kicking off by catering to dogs and cats, and will soon widen
            our services to include birds, rabbits, hamsters, guinea pigs,
            turtles and fish.
          </p>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            Our success comes from the satisfaction and comfort of our users. We
            monitor and ensure only high scoring pet owners and pet sitters are
            using our service for optimal safety, quality and security.
          </p>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            The struggle is real; the challenges that pet owners face not only
            stem from planning and time management, but also from the emotional
            turbulence faced by pet owners and their pets when left alone.
          </p>
          <p className="sm:mt-[30px] text-[22px] sm:text-left text-center font-light leading-9 sm:leading-[50px]">
            petto Club will match the right partnership in a safe, caring and
            engaged community of like-minded individuals to enable the level of
            peace of mind that pet owners deserve, knowing their pets are
            properly supervised when they need it, while our registered pet
            sitters are well compensated for their time spent doing what they
            enjoy. Welcome Aboard to petto Club - a world with a major stress
            taken care of! petto Club is currently operating in the UAE only.
            For more information about our services, please click here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
