import React from "react";
import bg from "../Assets/confetti.png";
import mobile from "../Assets/mobile.png";
import girl from "../Assets/girl.png";
import google from "../Assets/google.png";
import apple from "../Assets/apple.png";
import o from "../Assets/o.svg";
import blackO from "../Assets/black-o.svg";
function Mobile() {
  return (
    <div className="flex justify-start items-center isolate flex-col w-full relative max-w-[1350px] gap-6">
      <img
        src={bg}
        className="absolute left-0 top-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <h1 className="font-medium text-[38px] text-black tracking-[0.2em]">
        Book through{" "}
        <span className="text-darkOrange font-bold">
          pett
          <span className="inline-block">
            <img src={o} alt="" />
          </span>{" "}
          App
        </span>
      </h1>
      <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui.
      </p>
      <div className="flex w-full justify-center items-center gap-7">
        <img src={mobile} alt="" />
        <img src={girl} alt="" />
      </div>
      <h2 className="text-black font-bold text-[26px] tracking-[0.2em]">
        Download the{" "}
        <span className="inline-flex justify-center items-center">
          pett
          <img className="inline-block" src={blackO} alt="" />
        </span>{" "}
        app now!
      </h2>
      <div className="flex justify-center items-center gap-6">
        <img src={google} alt="" />
        <img src={apple} alt="" />
      </div>
    </div>
  );
}

export default Mobile;
