import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
function Contact() {
  const dropItems = ["Booking", "Billing", "Sitter", "General Inquiry"];
  const [drop, setDrop] = useState(false);
  const [filterDrop, setFilterDrop] = useState([...dropItems]);
  const [dropText, setDropText] = useState("");
  const dropHandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      setFilterDrop(dropItems);
      setDrop(false);
    } else {
      setDrop(true);
      const filtered = dropItems.filter((elem) => {
        if (elem.toLowerCase().includes(value.toLowerCase())) {
          return elem;
        }
      });
      setFilterDrop(filtered);
    }
  };
  return (
    <div className="flex justify-start items-center isolate flex-col w-full relative max-w-[1350px] gap-6">
      <h1 className="font-medium text-[38px] text-black">
        Get in <span className="text-darkOrange">Touch</span>
      </h1>
      <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
        We would like to hear from you!
      </p>
      <form className="w-full mt-6 gap-6 flex-col flex justify-center items-center">
        <div className="md:flex-row flex-col flex justify-between items-center gap-5 w-full">
          <div className="flex justify-center w-full items-start gap-4 flex-col">
            <label className="font-bold text-base" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
            />
          </div>
          <div className=" flex justify-center w-full items-start gap-4 flex-col">
            <label className="font-bold text-base" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
            />
          </div>
        </div>
        <div className="md:flex-row flex-col flex justify-between items-center gap-5 w-full">
          <div className="flex justify-center w-full items-start gap-4 flex-col">
            <label className="font-bold text-base" htmlFor="num">
              Phone Number
            </label>
            <div className="w-full flex justify-start items-center  rounded-[12px] border-solid border-[1px] border-[#e0e0e0] bg-white">
              <h2 className="border-r-[2px] border-solid border-[#e0e0e0] font-semibold text-darkOrange text-[15px] flex items-center w-[70px] justify-center gap-2">
                +971{" "}
                <FontAwesomeIcon className="text-black" icon={faCaretDown} />
              </h2>
              <input
                type="number"
                id="num"
                placeholder="Enter your phone number"
                className="w-full pl-4 h-[60px] bg-transparent border-none text-[15px] text-[#b1b1b1]"
              />
            </div>
          </div>
          <div className="flex justify-center w-full items-start gap-4 flex-col">
            <label className="font-bold text-base" htmlFor="inquire">
              Inquiry Related To
            </label>
            <div className="relative w-full flex justify-start items-center  rounded-[12px] border-solid border-[1px] border-[#e0e0e0] bg-white">
              <input
                onChange={dropHandler}
                type="text"
                value={dropText}
                id="inquire"
                placeholder="Select User Type"
                className="w-full pl-4 h-[60px] bg-transparent border-none text-[15px] text-[#b1b1b1]"
              />
              <h2
                onClick={() => {
                  setDrop((prev) => !prev);
                }}
                className="cursor-pointer select-none font-semibold text-[15px] flex items-center w-[70px] justify-center gap-2"
              >
                <FontAwesomeIcon className="text-black" icon={faCaretDown} />
              </h2>
              <div
                className={`rounded-[12px]  justify-start items-start gap-4 flex-col p-[20px] border-solid border-[1px] border-[#e0e0e0] bg-white absolute top-[110%] left-0 w-full max-h-[400px] ${
                  drop ? "flex" : "hidden"
                }`}
              >
                {filterDrop.map((elem, idx) => {
                  return (
                    <h2
                      className="cursor-pointer"
                      onClick={(e) => {
                        setDropText(e.target.innerText);
                        setDrop(false);
                      }}
                      key={"drop" + idx}
                    >
                      {elem}
                    </h2>
                  );
                })}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center w-full items-start gap-4 flex-col">
          <label className="font-bold text-base" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            placeholder="Type your message here"
            className="pt-4 w-full pl-4 h-[200px] resize-none bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
          ></textarea>
        </div>
        <button className="rounded-[12px] bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
