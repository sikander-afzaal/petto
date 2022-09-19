import React, { useState } from "react";
import { toast } from "react-toastify";
import parrot from "../Assets/parrot.png";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
function BecomeSitter() {
  const [form, setForm] = useState({
    name: "",
    zip: "",
    email: "",
    password: "",
    confirm: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.email === "" ||
      form.zip === "" ||
      form.password === "" ||
      form.password === ""
    ) {
      return toast.error("Please fill the form!");
    }
    if (form.password === form.confirm) {
      const userCollection = collection(db, "Users");
      addDoc(userCollection, {
        name: form.name,
        email: form.email,
        password: form.password,
        zip: form.zip,
      })
        .then(() => {
          return toast.success("Pet registered successfully");
        })
        .catch((err) => {
          // console.log(err);
          return toast.error("Uh Oh an error occurred please try again");
        })
        .finally(() => {
          setForm({ name: "", zip: "", email: "", password: "", confirm: "" });
        });
    } else {
      toast.error("Passwords dont match!");
    }
  };
  return (
    <div className="flex justify-start items-center isolate flex-col w-full relative max-w-[1350px] gap-6 sm:text-left text-center">
      <div className="flex justify-between items-start w-full gap-9">
        <img
          className="lg:block hidden w-[50%] max-w-[373px] object-contain"
          src={parrot}
          alt=""
        />
        <div className="flex justify-start items-start w-full flex-col gap-6">
          <h1 className="font-medium text-[38px] text-black">
            Become a <span className="text-darkOrange">Sitter</span>
          </h1>
          <p className="text-[#b1b1b1] text-xl font-medium tracking-wider">
            Register your first pet with petto and relax
          </p>
          <form
            onSubmit={submitHandler}
            className="w-full mt-6 gap-6 flex-col flex justify-center items-center"
          >
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="name">
                Full Name
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="email">
                Email Address
              </label>
              <input
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
                type="text"
                id="email"
                placeholder="Enter your email address"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="zip">
                Zip/Postal Code
              </label>
              <input
                value={form.zip}
                onChange={(e) =>
                  setForm((prev) => {
                    return { ...prev, zip: e.target.value };
                  })
                }
                type="text"
                id="zip"
                placeholder="Enter your Zip/Postal Code"
                className="w-full pl-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="pwd">
                Password
              </label>
              <input
                value={form.password}
                onChange={(e) =>
                  setForm((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                type="password"
                id="pwd"
                placeholder="Type the Password"
                className="w-full px-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex justify-center w-full items-start gap-4 flex-col">
              <label className="font-bold text-base" htmlFor="cpwd">
                Confirm Password
              </label>
              <input
                value={form.confirm}
                onChange={(e) =>
                  setForm((prev) => {
                    return { ...prev, confirm: e.target.value };
                  })
                }
                type="password"
                id="cpwd"
                placeholder="Type the Password"
                className="w-full px-4 h-[60px] bg-white rounded-[12px] border-solid border-[1px] border-[#e0e0e0] text-[15px] text-[#b1b1b1]"
              />
            </div>
            <div className="flex items-center justify-start gap-2 w-full text-left">
              <input
                type="checkbox"
                className="accent-darkOrange w-[18px] h-[18px]"
              />
              <p className="text-base text-[#b1b1b1] ">
                I agree to the{" "}
                <span className="text-darkOrange font-semibold">
                  Terms & Conditions
                </span>{" "}
                &{" "}
                <span className="text-darkOrange font-semibold">
                  {" "}
                  Privacy Policy
                </span>
              </p>
            </div>
            <button className="rounded-[12px] w-full bg-mustard shadow-shadow-btn text-white py-[18px] px-[41px] font-bold text-[15px]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeSitter;
