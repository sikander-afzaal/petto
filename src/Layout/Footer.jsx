import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="w-full px-8 bg-black flex justify-center gap-[160px] items-center py-12 flex-col">
      <div className="w-full  bg-black flex justify-start gap-[160px] items-start ">
        <div className="flex justify-start items-start flex-col gap-[15px]">
          <h2 className="text-white font-bold text-xl">Learn More</h2>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Read Our Blog
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            petto Q&A Community
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            petto Store
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            petto Guarantee
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-[15px]">
          <h2 className="text-white font-bold text-xl">About Petto</h2>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Accessibility
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Get the App
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Press
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Investor Relations
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-[15px]">
          <h2 className="text-white font-bold text-xl opacity-0">
            About Petto
          </h2>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Privacy Statement
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Cookie Policy
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Accessibility
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            CA - Do Not Sell My Info
          </a>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Terms of Service
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-[15px]">
          <h2 className="text-white font-bold text-xl">Need Help?</h2>
          <a
            href="#"
            className="text-white no-underline text-[15px] font-normal"
          >
            Help Center
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-[15px]">
          <h2 className="text-white font-bold text-xl">Connect</h2>
          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-lightWhite text-white no-underline text-lg"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-lightWhite text-white no-underline text-lg"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="w-[30px] flex justify-center items-center h-[30px] rounded-full  text-white bg-lightWhite no-underline text-lg"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-white text-base">
        © 2022 A Place for Petto, Inc. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
