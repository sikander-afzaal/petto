import React from "react";

function Card({ text, img }) {
  return (
    <div className="gap-4 bg-[#FAF7F7] rounded-[40px] w-[230px] h-[260px] flex items-center justify-center flex-col">
      <img src={img} alt="" />
      <h2 className="text-darkOrange text-[21px] font-semibold">{text}</h2>
    </div>
  );
}

export default Card;
