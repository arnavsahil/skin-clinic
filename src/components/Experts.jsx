import React from "react";
import skinexpert from "../assets/skinexpert.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const Experts = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center p-10">
        <h4 className="text-4xl font-bold text-teal-900 tracking-tight">
          Meet Our Expert Team
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          praesentium at recusandae.
        </p>
      </div>
      {/* cards */}
      <div className="cards flex justify-around px-5">
        <div className="card1 relative w-96 h-104 rounded-2xl">
          <img src={skinexpert} className="h-3/5 rounded-t-2xl" />
          <div className="h-2/5 rounded-b-2xl bg-white"></div>
          <div className="absolute left-8 top-40 rounded-full bg-teal-900 p-2">
            <RiDoubleQuotesL className="text-white" />
          </div>
          <div className="ratings absolute top-4 right-4 flex items-center px-2 py-1 rounded-4xl bg-white">
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <span className="text-xs font-bold ml-1">5</span>
          </div>
          <div className="absolute bottom-6 left-8 h-48 w-80 rounded-2xl bg-green-100 p-4">
            <h4 className="text-sm text-black font-bold">
              Dr Anne Johnson
            </h4>
            <h4 className="text-xs text-teal-900 font-bold mt-1">
              Plastic Surgeon
            </h4>
            <p className="text-xs text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, in Lorem ipsum dolor sit! dolor sit amet consectetur
            </p>
            <div className="flex gap-2 mt-6">
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Facelifts
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Rhionoplasty
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Blepharoplasty
              </button>
            </div>
          </div>
        </div>
        <div className="card1 relative w-96 h-104 rounded-2xl">
          <img src={skinexpert} className="h-3/5 rounded-t-2xl" />
          <div className="h-2/5 rounded-b-2xl bg-white"></div>
          <div className="absolute left-8 top-40 rounded-full bg-teal-900 p-2">
            <RiDoubleQuotesL className="text-white" />
          </div>
          <div className="ratings absolute top-4 right-4 flex items-center px-2 py-1 rounded-4xl bg-white">
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <span className="text-xs font-bold ml-1">5</span>
          </div>
          <div className="absolute bottom-6 left-8 h-48 w-80 rounded-2xl bg-green-100 p-4">
            <h4 className="text-sm text-black font-bold">
              Dr Anne Johnson
            </h4>
            <h4 className="text-xs text-teal-900 font-bold mt-1">
              Plastic Surgeon
            </h4>
            <p className="text-xs text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, in Lorem ipsum dolor sit! dolor sit amet consectetur
            </p>
            <div className="flex gap-2 mt-6">
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Facelifts
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Rhionoplasty
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Blepharoplasty
              </button>
            </div>
          </div>
        </div>
        <div className="card1 relative w-96 h-104 rounded-2xl">
          <img src={skinexpert} className="h-3/5 rounded-t-2xl" />
          <div className="h-2/5 rounded-b-2xl bg-white"></div>
          <div className="absolute left-8 top-40 rounded-full bg-teal-900 p-2">
            <RiDoubleQuotesL className="text-white" />
          </div>
          <div className="ratings absolute top-4 right-4 flex items-center px-2 py-1 rounded-4xl bg-white">
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <FaStar className="text-yellow-400 bg-content"/>
            <span className="text-xs font-bold ml-1">5</span>
          </div>
          <div className="absolute bottom-6 left-8 h-48 w-80 rounded-2xl bg-green-100 p-4">
            <h4 className="text-sm text-black font-bold">
              Dr Anne Johnson
            </h4>
            <h4 className="text-xs text-teal-900 font-bold mt-1">
              Plastic Surgeon
            </h4>
            <p className="text-xs text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, in Lorem ipsum dolor sit! dolor sit amet consectetur
            </p>
            <div className="flex gap-2 mt-6">
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Facelifts
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Rhionoplasty
              </button>
              <button className="text-xs rounded-4xl bg-white text-teal-900 font-bold px-3 py-1">
                Blepharoplasty
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
