import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Header({ setModal, setModalName }) {
  const [header, setHeader] = useState(false);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:ml-[120px] flex lg:justify-start justify-between lg:gap-[120px] items-center w-full max-w-[900px] h-[120px] px-5">
        <FontAwesomeIcon
          onClick={() => setHeader((prev) => !prev)}
          className="text-white text-2xl relative z-30 md:hidden block"
          icon={header ? faXmark : faBars}
        />
        <div
          onClick={() => setHeader(false)}
          className={`md:hidden ${
            header ? "block" : "hidden"
          } fixed top-0 left-0 w-screen h-screen z-[19] bg-black opacity-60`}
        ></div>
        <div
          className={`transition-all md:flex-row flex-col md:bg-transparent bg-darkOrange z-20 md:static fixed top-0 ${
            header ? "left-0" : "-left-[600px]"
          } h-screen md:h-auto md:max-w-none max-w-[400px] w-full md:w-auto flex justify-center items-center gap-[30px]`}
        >
          <p
            onClick={() => {
              setHeader(false);
              setModal(true);
              setModalName("services");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Services
          </p>
          <p
            onClick={() => {
              setHeader(false);
              setModal(true);
              setModalName("testimonials");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Testimonials
          </p>
          <p
            onClick={() => {
              setHeader(false);
              setModal(true);
              setModalName("about");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            About Us
          </p>
          <p
            onClick={() => {
              setHeader(false);
              setModal(true);
              setModalName("mobile");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Download Our App
          </p>
          <p
            onClick={() => {
              setHeader(false);
              setModal(true);
              setModalName("contact");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Contact Us
          </p>
        </div>
        <button className="rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
