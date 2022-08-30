import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Modal({ setModal, Component, bg }) {
  return (
    <div
      className={`${bg} bg-cover ${
        bg === "bg-service-confetti" ? "bg-[center_top] mt-9" : ""
      } ${
        bg === "bg-about-confetti" ? "bg-[center_top]" : ""
      }     w-full  flex flex-col justify-start items-center  py-5 px-10`}
    >
      <div
        onClick={() => setModal(false)}
        className="cursor-pointer flex items-center justify-center self-end p-4 bg-darkOrange rounded-full w-[50px] h-[50px] shadow-shadow-orange"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[30px] text-white"
        />
      </div>
      {Component}
    </div>
  );
}

export default Modal;
