import React from "react";

function Header({ setModal, setModalName }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-[865px] h-[120px]">
        <div className="flex justify-center items-center gap-6">
          <p className="cursor-pointer no-underline text-white text-[15px] font-semibold">
            Services
          </p>
          <p
            onClick={() => {
              setModal(true);
              setModalName("testimonials");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Testimonials
          </p>
          <p
            onClick={() => {
              setModal(true);
              setModalName("about");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            About Us
          </p>
          <p
            onClick={() => {
              setModal(true);
              setModalName("mobile");
            }}
            className="cursor-pointer no-underline text-white text-[15px] font-semibold"
          >
            Download Our App
          </p>
          <p
            onClick={() => {
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
