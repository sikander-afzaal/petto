import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import pet1 from "../Assets/hero1.png";
import pet2 from "../Assets/hero2.png";
import pet3 from "../Assets/hero3.png";
import heroBg from "../Assets/hero-bg.png";
import logo from "../Assets/Logo.png";
import { AnimatePresence, motion } from "framer-motion";
function Hero({ setModalName, setModal }) {
  const [bg, setBg] = useState("first");
  useEffect(() => {
    setTimeout(() => {
      switch (bg) {
        case "first":
          setBg("second");
          break;
        case "second":
          setBg("third");
          break;
        case "third":
          setBg("first");
          break;

        default:
          setBg("first");
          break;
      }
    }, 4000);
  }, [bg]);

  return (
    <div className="flex w-fulll justify-center items-center relative isolate px-5">
      <img
        src={heroBg}
        className="absolute bottom-0 w-full left-0 -z-10 object-cover"
        alt=""
      />
      <div className="w-full max-w-[865px] flex items-center justify-start pt-[160px] min-h-[900px] flex-col gap-9">
        <div className="relative isolate">
          <AnimatePresence wait>
            {bg === "first" && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={bg}
                src={pet1}
                className="sm:w-auto sm:h-auto w-[414px] h-[320px] max-w-full absolute -z-10 bottom-0 left-1/2 -translate-x-1/2"
                alt=""
              />
            )}
            {bg === "second" && (
              <motion.img
                key={bg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={pet2}
                className="sm:w-auto sm:h-auto w-[414px] h-[320px] object-contain max-w-full absolute -z-10 bottom-0 left-1/2 -translate-x-1/2"
                alt=""
              />
            )}
            {bg === "third" && (
              <motion.img
                key={bg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={pet3}
                className="sm:w-auto sm:h-auto w-[414px] h-[320px] max-w-full absolute -z-10 bottom-0 left-1/2 -translate-x-1/2"
                alt=""
              />
            )}
          </AnimatePresence>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-center tracking-[0.2em] text-white text-3xl font-medium">
          Trust the Best with Your Pets
        </h1>
        <div className="sm:flex-row flex-col flex justify-center items-center gap-5 w-full sm:w-auto">
          <button
            onClick={() => {
              setModal(true);
              setModalName("pet");
            }}
            className="h-[62px] sm:w-auto w-full flex justify-center items-center rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]"
          >
            Register Your Pet{" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-3 text-[18px]" />
          </button>
          <button
            onClick={() => {
              setModal(true);
              setModalName("become-sitter");
            }}
            className="h-[62px] sm:w-auto w-full rounded-[12px] bg-transparent border-2 border-white border-solid text-white py-[18px] px-[41px] font-bold text-[15px]"
          >
            Become a Sitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
