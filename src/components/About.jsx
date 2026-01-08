import React from "react";
import skinProImg from "../assets/skinprofessional.jpg";
import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full relative w-1/3">
        <img
          src={skinProImg}
          className="absolute right-0 top-24 h-3/4 w-84 rounded-2xl"
        />
      </div>
      <div className="w-2/3 px-8 py-10 ">
        <div className="mx-20">
          <h4 className="text-3xl font-bold text-teal-900">
            <span className="text-black mr-2">About</span>Glamour Spa
          </h4>
          <p className="text-sm text-gray-500 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
            consequatur voluptatibus. Aliquam, pariatur quis iusto omnis debitis
            optio rerum harum. Officiis quasi voluptate error, reprehenderit
            quod tempora repellat rem pariatur reiciendis et dolor numquam
            similique velit nobis? Hic, fuga corrupti djkchdb dchbdcx!
          </p>
        </div>
        <div className="w-2/3 ml-28 py-12 -mt-4">
          <h4 className="text-md font-semibold text-teal-900">Our Approach</h4>
          <div className="mt-4 ml-2 flex flex-col gap-3">
            <div className="flex gap-3">
              <span className="text-teal-900">
                <FaHeart />
              </span>
              <p className="text-xs text-gray-500 font-medium">
                consequatur voluptatibus. Aliquam, pariatur quis iusto omnis
                debitis{" "}
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-teal-900">
                <FaHeart />
              </span>
              <p className="text-xs text-gray-500 font-medium">
                consequatur voluptatibus. Aliquam, pariatur quis iusto omnis
                debitis{" "}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-teal-900">
                <FaHeart />
              </span>
              <p className="text-xs text-gray-500 font-medium">
                consequatur voluptatibus. Aliquam, pariatur quis iusto omnis
                debitis{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="cards grid grid-cols-2 p-8 -mt-16 ml-8">
          <div className="card1 rounded-xl bg-amber-50 p-3 m-2 flex items-center gap-3">
            <FaHeart className="text-teal-900" />
            <div>
              <h4 className="text-md font-bold">10+</h4>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>
          <div className="card2 rounded-xl bg-amber-50 p-3 m-2 flex items-center gap-3">
            <FaHeart className="text-teal-900" />
            <div>
              <h4 className="text-md font-bold">10+</h4>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>
          <div className="card3 rounded-xl bg-amber-50 p-3 m-2 flex items-center gap-3">
            <FaHeart className="text-teal-900" />
            <div>
              <h4 className="text-md font-bold">10+</h4>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>
          <div className="card4 rounded-xl bg-amber-50 p-3 m-2 flex items-center gap-3">
            <FaHeart className="text-teal-900" />
            <div>
              <h4 className="text-md font-bold">10+</h4>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="ml-16">
          <button className="rounded-full bg-teal-900 px-5 py-3 text-white text-xs">Meet Our Specialists</button>
        </div>
      </div>
    </div>
  );
};

export default About;
