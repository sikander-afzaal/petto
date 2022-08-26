import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-[865px] h-[120px]">
        <div className="flex justify-center items-center gap-6">
          <a
            href="#"
            className="no-underline text-white text-[15px] font-semibold"
          >
            Services
          </a>
          <a
            href="#"
            className="no-underline text-white text-[15px] font-semibold"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="no-underline text-white text-[15px] font-semibold"
          >
            About Us
          </a>
          <a
            href="#"
            className="no-underline text-white text-[15px] font-semibold"
          >
            Download Our App
          </a>
          <a
            href="#"
            className="no-underline text-white text-[15px] font-semibold"
          >
            Contact Us
          </a>
        </div>
        <button className="rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
