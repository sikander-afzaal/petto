import React, { useState } from "react";
import blackO from "../Assets/black-o.svg";
import Card from "../Components/Card";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import card4 from "../Assets/card4.png";
import card5 from "../Assets/card5.png";
import card6 from "../Assets/card6.png";
import cat from "../Assets/cat.png";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import service4 from "../Assets/service4.png";
import service5 from "../Assets/service5.png";
import service6 from "../Assets/service6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Services() {
  const [serviceProp, setServiceProp] = useState({
    name: "",
    desc: "",
    img: "",
  });
  return (
    <div className="flex justify-start items-center isolate flex-col w-full relative max-w-[1350px]  -mt-8 gap-6 lg:text-left text-center">
      <h1 className="font-bold text-[30px] md:text-[38px] text-darkOrange tracking-[0.2em]">
        <span className="text-black font-medium">
          pett
          <span className="inline-block">
            <img src={blackO} className="w-[25px] h-[25px]" alt="" />
          </span>{" "}
        </span>{" "}
        Services
      </h1>
      <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      </p>
      <div className="relative xl:flex-row flex-col-reverse flex justify-between items-start w-full lg:mt-[80px]">
        <div
          className={`xl:w-[40%] w-full ${
            serviceProp.img
              ? "flex justify-start items-center xl:items-start gap-2 relative flex-col lg:pl-12"
              : ""
          }   ${serviceProp.img ? "h-[612px]" : ""}`}
        >
          {serviceProp.img ? (
            <>
              <h1 className="font-semibold text-[32px]">{serviceProp.name}</h1>
              <p className="text-[22px] max-w-[400px]">
                {serviceProp.desc}
              </p>{" "}
              <button className="h-[62px] sm:w-auto w-full flex justify-center items-center rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
                Book Now{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-3 text-[18px]"
                />
              </button>
              <img
                src={serviceProp.img}
                className="absolute left-0 bottom-[0%] -z-[1]"
                alt=""
              />
            </>
          ) : (
            <img
              className="hidden lg:block w-[1000px] object-fill   top-0 left-[0%] absolute "
              src={cat}
              alt=""
            />
          )}
        </div>
        <div className="cursor-pointer relative flex justify-center items-center flex-wrap lg:grid grid-cols-[auto_auto_auto_auto] grid-rows-2 w-full xl:w-[60%] gap-5 mb-[50px] lg:mb-0">
          <div
            onClick={() => {
              setServiceProp({
                name: "Boarding",
                desc: "Your pet has the comfort of company while staying overnight at your sitter’s house.",
                img: service1,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Boarding",
                desc: "Your pet has the comfort of company while staying overnight at your sitter’s house.",
                img: service1,
              });
            }}
            className="col-span-1 row-span-2 lg:self-center flex justify-center items-center"
          >
            <Card
              img={card1}
              text={"Boarding"}
              width
              active={serviceProp.name === "Boarding" ? true : false}
            />
          </div>
          <div
            onClick={() => {
              setServiceProp({
                name: "Day Care",
                desc: "Your pet enjoys the day at your sitter’s place from morning until evening.",
                img: service2,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Day Care",
                desc: "Your pet enjoys the day at your sitter’s place from morning until evening. ",
                img: service2,
              });
            }}
            className="col-start-2 col-end-3 row-span-1 lg:self-start flex justify-center items-center cursor-pointer"
          >
            {" "}
            <Card
              img={card2}
              text={"Pet Day Care"}
              width
              active={serviceProp.name === "Day Care" ? true : false}
            />
          </div>
          <div
            onClick={() => {
              setServiceProp({
                name: "Pet Sitting",
                desc: "Your sitter spends the day with your pet at your home from morning until evening.",
                img: service6,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Pet Sitting",
                desc: "Your sitter spends the day with your pet at your home from morning until evening.",
                img: service6,
              });
            }}
            className="lg:-mt-[30px] col-start-2 col-end-3 row-span-2 lg:self-start flex justify-center items-center cursor-pointer"
          >
            {" "}
            <Card
              img={card4}
              text={"Pet Sitting"}
              width
              active={serviceProp.name === "Pet Sitting" ? true : false}
            />
          </div>
          <div
            onClick={() => {
              setServiceProp({
                name: "Dog Walking",
                desc: "Your sitter takes your doggo for a 30min/1hr walk.",
                img: service4,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Dog Walking",
                desc: "Your sitter takes your doggo for a 30min/1hr walk.",
                img: service4,
              });
            }}
            className="lg:mt-[50px] col-start-3 col-end-4 row-start-1 row-end-2 lg:self-end flex justify-center items-center cursor-pointer"
          >
            {" "}
            <Card
              img={card3}
              text={"Dog Walking"}
              width
              active={serviceProp.name === "Dog Walking" ? true : false}
            />
          </div>
          <div
            onClick={() => {
              setServiceProp({
                name: "Overnight Sitting",
                desc: "Your sitter sleeps over at your home while your pet gets to snuggle in his/her own space.",
                img: service3,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Overnight Sitting",
                desc: "Your sitter sleeps over at your home while your pet gets to snuggle in his/her own space.",
                img: service3,
              });
            }}
            className="lg:mt-[30px] col-start-3 col-end-4 row-start-2 row-end-3 lg:self-start flex justify-center items-center cursor-pointer"
          >
            <Card
              img={card5}
              text={"Overnight Sitting"}
              width
              active={serviceProp.name === "Overnight Sitting" ? true : false}
            />
          </div>
          <div
            onClick={() => {
              setServiceProp({
                name: "Drop-In Visits",
                desc: "Your sitter drops by for a quick round of play, potty break, snack time and change of drinking water, leaving your pet feeling refreshed in your absence.",
                img: service5,
              });
            }}
            onMouseEnter={() => {
              setServiceProp({
                name: "Drop-In Visits",
                desc: "Your sitter drops by for a quick round of play, potty break, snack time and change of drinking water, leaving your pet feeling refreshed in your absence.",
                img: service5,
              });
            }}
            className="col-start-4 col-end-5 row-start-1 row-end-3 lg:self-center flex justify-center items-center cursor-pointer"
          >
            {" "}
            <Card
              img={card6}
              text={"Drop-in Visits"}
              width
              active={serviceProp.name === "Drop-In Visits" ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
