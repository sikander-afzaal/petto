import React from "react";

function Card({ text, img, width, active }) {
  return (
    <div
      className={`gap-4 bg-[#FAF7F7] rounded-[40px] ${
        width ? "w-[175px] h-[236px]" : "w-[230px] h-[260px]"
      }  flex items-center justify-center flex-col text-center ${
        active ? "bg-darkOrange" : "bg-[#FAF7F7]"
      }`}
    >
      <img
        src={img}
        alt=""
        className={`w-[50%]  ${active ? "brightness-0 invert" : ""}`}
      />
      <h2
        className={` ${width ? "text-base" : "text-[21px]"} font-semibold ${
          active ? "text-white" : "text-darkOrange"
        }`}
      >
        {text}
      </h2>
    </div>
  );
}

export default Card;
