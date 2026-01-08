import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Services = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center">
        <h4 className="text-3xl font-bold text-teal-900">
          Our Premium Services
        </h4>
        <p className="w-2/5 text-sm text-gray-500 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          possimus atque. Amet ipsam aliquam magnam.
        </p>
      </div>

      <div className="flex justify-center p-10 gap-10">
        <div className="hover:scale-105 transition-all duration-300 h-64 w-52 flex flex-col gap-4 bg-white p-4 rounded-xl">
          <span>
            <FaClinicMedical className="h-6 w-6 text-teal-900" />
          </span>

          <h4 className="font-bold text-sm">Facelift Procedures</h4>
          <p className="text-xs text-gray-600 p-2 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, est mollitia! Rem, recusandae! Quia, aliquid.
          </p>
          <a
            className="text-teal-900 text-xs font-semibold mt-4 flex gap-1 items-center"
            href=""
          >
            Learn more{" "}
            <span>
              <MdKeyboardArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
        <div className="hover:scale-105 transition-all duration-300 h-64 w-52 flex flex-col gap-4 bg-white p-4 rounded-xl">
          <span>
            <FaClinicMedical className="h-6 w-6 text-teal-900" />
          </span>

          <h4 className="font-bold text-sm">Facelift Procedures</h4>
          <p className="text-xs text-gray-600 p-2 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, est mollitia! Rem, recusandae! Quia, aliquid.
          </p>
          <a
            className="text-teal-900 text-xs font-semibold mt-4 flex gap-1 items-center"
            href=""
          >
            Learn more{" "}
            <span>
              <MdKeyboardArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
        <div className="hover:scale-105 transition-all duration-300 h-64 w-52 flex flex-col gap-4 bg-white p-4 rounded-xl">
          <span>
            <FaClinicMedical className="h-6 w-6 text-teal-900" />
          </span>

          <h4 className="font-bold text-sm">Facelift Procedures</h4>
          <p className="text-xs text-gray-600 p-2 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, est mollitia! Rem, recusandae! Quia, aliquid.
          </p>
          <a
            className="text-teal-900 text-xs font-semibold mt-4 flex gap-1 items-center"
            href=""
          >
            Learn more{" "}
            <span>
              <MdKeyboardArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
        <div className="hover:scale-105 transition-all duration-300 h-64 w-52 flex flex-col gap-4 bg-white p-4 rounded-xl">
          <span>
            <FaClinicMedical className="h-6 w-6 text-teal-900" />
          </span>

          <h4 className="font-bold text-sm">Facelift Procedures</h4>
          <p className="text-xs text-gray-600 p-2 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, est mollitia! Rem, recusandae! Quia, aliquid.
          </p>
          <a
            className="text-teal-900 text-xs font-semibold mt-4 flex gap-1 items-center"
            href=""
          >
            Learn more{" "}
            <span>
              <MdKeyboardArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
