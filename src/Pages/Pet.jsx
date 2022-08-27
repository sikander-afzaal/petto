import React from "react";
import bg from "../Assets/confetti.png";
import parrot from "../Assets/parrot.png";
function Pet() {
  return (
    <div className="flex justify-start items-center isolate flex-col w-full relative max-w-[1350px] gap-6 sm:text-left text-center">
      <img
        src={bg}
        className="absolute left-0 top-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <div className="flex justify-between items-start w-full gap-9">
        <img
          className="lg:block hidden w-[50%] max-w-[373px] object-contain"
          src={parrot}
          alt=""
        />
        <div className="flex justify-start items-start w-full flex-col gap-6">
          <h1 className="font-medium text-[38px] text-black">
            Create your pets's <span className="text-darkOrange">Profile</span>
          </h1>
          <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
            Register your first pet with petto and relax
          </p>
          <form className="w-full mt-6 gap-6 flex-col flex justify-center items-center">
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email address"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="zip">
                Zip/Postal Code
              </label>
              <input
                type="text"
                id="zip"
                placeholder="Enter your Zip/Postal Code"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="pwd">
                Password
              </label>
              <input
                type="password"
                id="pwd"
                placeholder="Type the Password"
                className="w-full px-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="cpwd">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpwd"
                placeholder="Type the Password"
                className="w-full px-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pet;
