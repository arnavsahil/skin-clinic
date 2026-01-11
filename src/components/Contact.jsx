import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fruit, setFruit] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("fullname", fullName);
    console.log("number", number);
    console.log("email", email);
    console.log("selected fruit", fruit);
    console.log("message", message);
    setFullName("");
    setNumber("");
    setEmail("");
    setFruit("");
    setMessage("");
  };
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center justify-center p-10">
        <h4 className="text-4xl font-bold text-teal-900 tracking-tight">
          Contact Our Clinic
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          praesentium at recusandae.
        </p>
      </div>

      <div className="flex justify-around gap-12 px-10">
        <div className="w-2/5 h-144 bg-white rounded-2xl">
          <h4 className="font-bold text-lg py-6 px-8">Get in Touch</h4>
          <div className="w-3/4 grid gap-4">
            <div className="px-8 flex items-center">
              <div className="rounded-full p-2 bg-green-200">
                <FaLocationDot className="text-teal-900" />
              </div>
              <div className="px-4">
                <h4 className="font-semibold text-xs">Our location</h4>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing dolor
                </p>
              </div>
            </div>
            <div className="px-8 flex items-center">
              <div className="rounded-full p-2 bg-green-200">
                <FaLocationDot className="text-teal-900" />
              </div>
              <div className="px-4">
                <h4 className="font-semibold text-xs">Our location</h4>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing dolor
                </p>
              </div>
            </div>
            <div className="px-8 flex items-center">
              <div className="rounded-full p-2 bg-green-200">
                <FaLocationDot className="text-teal-900" />
              </div>
              <div className="px-4">
                <h4 className="font-semibold text-xs">Our location</h4>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing dolor
                </p>
              </div>
            </div>
            <div className="px-8 flex items-center">
              <div className="rounded-full p-2 bg-green-200">
                <FaLocationDot className="text-teal-900" />
              </div>
              <div className="px-4">
                <h4 className="font-semibold text-xs">Our location</h4>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing dolor dolor
                  sit amet consectetur adipisicin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 h-144 bg-white rounded-2xl">
          <div className="px-8 py-6">
            <h4 className="font-bold text-teal-900 text-lg">
              Send Us a Message
            </h4>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex px-8 -mt-2 gap-8 items-center">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-sm font-semibold" htmlFor="">
                  Full name
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                  placeholder="Your name"
                  className="border border-gray-400 text-sm text-gray-700 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-sm font-semibold" htmlFor="">
                  Phone number
                </label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  placeholder="Phone number"
                  className="border border-gray-400 text-sm text-gray-700 rounded-lg p-3"
                />
              </div>
            </div>
            <div className="flex flex-col px-8 mt-4 gap-2">
              <label className="text-sm font-semibold" htmlFor="">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="your@email.com"
                className="border border-gray-400 text-sm text-gray-700 rounded-lg p-3"
              />
            </div>
            <div className="px-8 mt-4 flex flex-col gap-2">
              <h4 className="text-gray-500 text-sm font-semibold">
                Service Interested In
              </h4>
              <select
                className="border border-gray-400 text-sm text-gray-700 rounded-lg p-3"
                value={fruit}
                onChange={(e) => {
                  setFruit(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <div className="px-8 mt-4 flex flex-col gap-2">
              <h4 className="text-gray-500 text-sm font-semibold">
                Your Message
              </h4>
              <textarea
                className="border border-gray-400 text-sm rounded-lg p-3 h-28 text-gray-800"
                name=""
                id=""
                placeholder="Tell us about your concerns or question"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mt-6 px-8">
              <button className="rounded-4xl text-xs font-medium text-white bg-teal-900 px-5 py-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
