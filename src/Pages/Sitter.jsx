import React from "react";
import Card from "../Components/Card";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import card4 from "../Assets/card4.png";
import card5 from "../Assets/card5.png";
import card6 from "../Assets/card6.png";
function Sitter() {
  return (
    <div className="flex  justify-start items-center isolate flex-col w-full relative max-w-[1150px] gap-6 sm:text-left text-center">
      <h1 className="font-medium text-[38px] text-black">
        Become a <span className="text-darkOrange">Sitter</span>
      </h1>
      <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
        Select at least one service you’re interested in.
      </p>
      <div className="mt-6 gap-[28px] flex items-center justify-center flex-wrap w-full">
        <Card img={card1} text={"Boarding"} />
        <Card img={card2} text={"Pet Day Care"} />
        <Card img={card3} text={"Dog Walking"} />
        <Card img={card4} text={"Pet Sitting"} />
        <Card img={card5} text={"Overnight Sitting"} />
        <Card img={card6} text={"Drop-in Visits"} />
      </div>
      <button className="mt-6 rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
        Save and Continue
      </button>
    </div>
  );
}

export default Sitter;
