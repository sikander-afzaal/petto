import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Modal({ setModal, Component, bg }) {
  return (
    <div
      className={` w-full relative flex flex-col isolate justify-start items-center  py-7 px-10`}
    >
      <div
        onClick={() => setModal(false)}
        className="cursor-pointer flex z-20 items-center justify-center self-end p-4 bg-darkOrange rounded-full w-[50px] h-[50px] shadow-shadow-orange"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[30px] text-white"
        />
      </div>
      {bg === "services" || bg === "contact" ? (
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4.63%] top-[7%]"
            alt=""
          />
          <img
            src="/bg/Union-3.svg"
            className="absolute left-[30%] 2xl:left-[37.5%] top-2 md:top-[5%]"
            alt=""
          />
          <img
            src="/bg/Vector-4.svg"
            className="absolute left-[65%] 2xl:left-[59%] top-2 md:top-[4.5%]"
            alt=""
          />
          <img
            src="/bg/Union-9.svg"
            className="absolute left-[0%] top-[20%]"
            alt=""
          />
          <img
            src="/bg/Vector.svg"
            className="absolute left-[45%] top-[21%]"
            alt=""
          />
          <img
            src="/bg/Vector-3.svg"
            className="absolute left-[92%] top-[14%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-6.svg"
            className="absolute left-[3%] top-[33%]"
            alt=""
          />{" "}
          <img
            src="/bg/Vector-1.svg"
            className="absolute left-[32%] top-[30%]"
            alt=""
          />
          <img
            src="/bg/Union-10.svg"
            className="absolute left-[85%] top-[29%]"
            alt=""
          />
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4%] top-[50%] z-10"
            alt=""
          />
          <img
            src="/bg/Union-5.svg"
            className="absolute left-[57.5%] top-[71%]"
            alt=""
          />
          <img
            src="/bg/Union.svg"
            className="absolute right-0 top-[41%]"
            alt=""
          />
          <img
            src="/bg/Union-7.svg"
            className="absolute right-[13%] top-[76%]"
            alt=""
          />
          <img
            src="/bg/Union-1.svg"
            className="absolute right-[18%] top-[93%]"
            alt=""
          />
          <img
            src="/bg/Union-8.svg"
            className="absolute right-[0%] top-[85%]"
            alt=""
          />
          <img
            src="/bg/Union-2.svg"
            className="absolute right-[5%] top-[100%]"
            alt=""
          />
          <img
            src="/bg/Vector-2.svg"
            className="absolute right-[50%] top-[100%]"
            alt=""
          />
          <img
            src="/bg/Union-4.svg"
            className="absolute left-[5%] top-[100%]"
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {bg === "pet" || bg === "become-sitter" ? (
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4.63%] top-[7%]"
            alt=""
          />
          <img
            src="/bg/Union-3.svg"
            className="absolute left-[30%] 2xl:left-[37.5%] top-2 md:top-[5%]"
            alt=""
          />
          <img
            src="/bg/Vector-4.svg"
            className="absolute left-[65%] 2xl:left-[59%] top-2 md:top-[4.5%]"
            alt=""
          />
          <img
            src="/bg/Union-9.svg"
            className="absolute left-[0%] top-[20%]"
            alt=""
          />
          <img
            src="/bg/Vector.svg"
            className="absolute left-[45%] top-[21%]"
            alt=""
          />
          <img
            src="/bg/Vector-3.svg"
            className="absolute left-[92%] top-[14%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-6.svg"
            className="absolute left-[3%] top-[33%]"
            alt=""
          />{" "}
          <img
            src="/bg/Vector-1.svg"
            className="absolute left-[32%] top-[30%]"
            alt=""
          />
          <img
            src="/bg/Union-10.svg"
            className="absolute left-[85%] top-[29%]"
            alt=""
          />
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4%] top-[50%] z-10"
            alt=""
          />
          <img
            src="/bg/Union-5.svg"
            className="absolute left-[57.5%] top-[71%]"
            alt=""
          />
          <img
            src="/bg/Union.svg"
            className="absolute right-0 top-[41%]"
            alt=""
          />
          <img
            src="/bg/Union-7.svg"
            className="absolute right-[13%] top-[76%]"
            alt=""
          />
          <img
            src="/bg/Union-1.svg"
            className="absolute right-[15%] top-[87%]"
            alt=""
          />
          <img
            src="/bg/Union-8.svg"
            className="absolute right-[0%] top-[85%]"
            alt=""
          />
          <img
            src="/bg/Union-2.svg"
            className="absolute right-[5%] top-[100%]"
            alt=""
          />
          <img
            src="/bg/Vector-2.svg"
            className="absolute right-[50%] top-[100%]"
            alt=""
          />
          <img
            src="/bg/Union-4.svg"
            className="absolute left-[5%] top-[100%]"
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {bg === "testimonials" ? (
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <img
            src="/bg/Union-6.svg"
            className="absolute left-[4%] top-[3%]"
            alt=""
          />
          <img
            src="/bg/Vector-10.svg"
            className="absolute left-[38%] top-[1%]"
            alt=""
          />
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4%] top-[15%]"
            alt=""
          />
          <img
            src="/bg/Union-5.svg"
            className="absolute left-[47%] top-[21%]"
            alt=""
          />
          <img
            src="/bg/Union-7.svg"
            className="absolute left-[87%] top-[26%]"
            alt=""
          />
          <img
            src="/bg/Union-8.svg"
            className="absolute right-0 top-[33%]"
            alt=""
          />
          <img
            src="/bg/Vector-2.svg"
            className="absolute left-[50%] top-[42%]"
            alt=""
          />
          <img
            src="/bg/Union-2.svg"
            className="absolute left-[95%] top-[42%]"
            alt=""
          />
          <img
            src="/bg/Union-9.svg"
            className="absolute left-[0%] top-[59%]"
            alt=""
          />
          <img
            src="/bg/Union-6.svg"
            className="absolute  left-[4%] top-[69%]"
            alt=""
          />
          <img
            src="/bg/Vector-5.svg"
            className="absolute left-[4%] top-[80%]"
            alt=""
          />
          <img
            src="/bg/Union-5.svg"
            className="absolute left-[47%] top-[83%]"
            alt=""
          />
          <img
            src="/bg/Union-8.svg"
            className="absolute right-0 top-[95%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-2.svg"
            className="absolute left-[95%] top-[102%]"
            alt=""
          />
          <img
            src="/bg/Union-4.svg"
            className="absolute left-[4%] top-[102%]"
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {bg === "about" ? (
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <img
            src="/bg/Union-4.svg"
            className="absolute left-[2%] top-[4%]"
            alt=""
          />
          <img
            src="/bg/Union-11.svg"
            className="absolute left-[3%] top-[20%]"
            alt=""
          />
          <img
            src="/bg/Vector-9.svg"
            className="absolute left-[33%] top-[12%]"
            alt=""
          />
          <img
            src="/bg/Vector.svg"
            className="absolute left-[34%] top-[28%]"
            alt=""
          />
          <img
            src="/bg/Vector-3.svg"
            className="absolute left-[75%] top-[10%]"
            alt=""
          />
          <img
            src="/bg/Union-3.svg"
            className="absolute left-[87%] top-[2%]"
            alt=""
          />
          <img
            src="/bg/Union-10.svg"
            className="absolute left-[89%] top-[22%]"
            alt=""
          />
          <img
            src="/bg/Vector-8.svg"
            className="absolute left-[60%] top-[75%]"
            alt=""
          />
          <img
            src="/bg/Union-12.svg"
            className="absolute left-[2%] top-[87%]"
            alt=""
          />
          <img
            src="/bg/Union-10.svg"
            className="absolute left-[42%] top-[92%]"
            alt=""
          />
          <img
            src="/bg/Union-13.svg"
            className="absolute left-[36%] bottom-0"
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {bg === "mobile" ? (
        <div className="absolute w-full h-full left-0 top-0 -z-10">
          <img
            src="/bg/Union-8.svg"
            className="absolute left-[2%] top-[4%]"
            alt=""
          />
          <img
            src="/bg/Vector-9.svg"
            className="absolute left-[28%] top-[7%]"
            alt=""
          />
          <img
            src="/bg/Union-15.svg"
            className="absolute left-[80%] top-[17%]"
            alt=""
          />
          <img
            src="/bg/Vector-1.svg"
            className="absolute left-[13%] top-[27%]"
            alt=""
          />
          <img
            src="/bg/Union-9.svg"
            className="absolute left-[37%] top-[26%]"
            alt=""
          />
          <img
            src="/bg/Vector-12.svg"
            className="absolute left-[57%] top-[22%]"
            alt=""
          />
          <img
            src="/bg/Union-6.svg"
            className="absolute left-[12%] top-[45%]"
            alt=""
          />
          <img
            src="/bg/Vector-11.svg"
            className="absolute left-[44%] top-[35%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-19.svg"
            className="absolute left-[52%] top-[32%]"
            alt=""
          />{" "}
          <img
            src="/bg/Vector.svg"
            className="absolute left-[84%] top-[36%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-8.svg"
            className="absolute left-[12%] top-[66%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-18.svg"
            className="absolute left-[82%] top-[50%]"
            alt=""
          />{" "}
          <img
            src="/bg/Union-5.svg"
            className="absolute left-[46%] top-[70%]"
            alt=""
          />
          <img
            src="/bg/Union-14.svg"
            className="absolute left-[56%] top-[74%]"
            alt=""
          />
          <img
            src="/bg/Vector-14.svg"
            className="absolute left-[76%] top-[74%]"
            alt=""
          />
          <img
            src="/bg/Union-20.svg"
            className="absolute left-[96%] top-[72%]"
            alt=""
          />
          <img
            src="/bg/Union-2.svg"
            className="absolute left-[88%] top-[80%]"
            alt=""
          />
          <img
            src="/bg/Union-21.svg"
            className="absolute left-[76%] top-[87%]"
            alt=""
          />
          <img
            src="/bg/Vector-22.svg"
            className="absolute left-[65%] top-[90%]"
            alt=""
          />
          <img
            src="/bg/Union-1.svg"
            className="absolute left-[50%] bottom-0"
            alt=""
          />
          <img
            src="/bg/Vector-19.svg"
            className="absolute left-[20%] top-[95%]"
            alt=""
          />
          <img
            src="/bg/Union-4.svg"
            className="absolute left-[10%] top-[80%]"
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {Component}
    </div>
  );
}

export default Modal;
