import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Modal({ setModal, Component }) {
  return (
    <div className="bg-confetti bg-cover  modal w-full rounded-tl-[50px] rounded-tr-[50px] bg-white z-20 min-h-[95vh] max-h-[95vh] overflow-y-auto flex flex-col justify-start items-center py-5 px-10">
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
