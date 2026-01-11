import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-screen bg-gray-800">
      <div className="flex">
        <div className="w-1/2 p-10">
          <div className="flex items-center gap-2">
            <FaClinicMedical className="text-teal-900 h-6 w-6" />
            <h4 className="text-white font-bold text-lg">Glamour Clinic</h4>
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            reprehenderit dolore dolores beatae saepe dignissimos es beatae
            saepe dignissimos fugit soluta earum autem animi.
          </p>
          <div className="flex gap-3 mt-6">
            <div className="p-2 bg-gray-700 rounded-full">
              <FaFacebookF className="text-white text-xs" />
            </div>
            <div className="p-2 bg-gray-700 rounded-full">
              <FaFacebookF className="text-white text-xs" />
            </div>
            <div className="p-2 bg-gray-700 rounded-full">
              <FaFacebookF className="text-white text-xs" />
            </div>
            <div className="p-2 bg-gray-700 rounded-full">
              <FaFacebookF className="text-white text-xs" />
            </div>
            <div className="p-2 bg-gray-700 rounded-full">
              <FaFacebookF className="text-white text-xs" />
            </div>
          </div>
        </div>
        <div className="w-1/2 py-10 flex gap-48">
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-md font-bold">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <a href="" className="text-gray-400 text-xs font-medium">
                Home
              </a>
              <a href="" className="text-gray-400 text-xs font-medium">
                About Us
              </a>
              <a href="" className="text-gray-400 text-xs font-medium">
                Our Services
              </a>
              <a href="" className="text-gray-400 text-xs font-medium">
                Our Specialists
              </a>
              <a href="" className="text-gray-400 text-xs font-medium">
                Contact Us
              </a>
              <a href="" className="text-gray-400 text-xs font-medium">
                Book Appointment
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-48">
            <h4 className="text-white font-bold text-md">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-teal-900" />
                <p className="text-gray-400 text-xs">
                  123 Beauty Avenue, Medical District, London
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-teal-900" />
                <p className="text-gray-400 text-xs">
                  123 Beauty Avenue, Medical District, London
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-teal-900" />
                <p className="text-gray-400 text-xs">
                  123 Beauty Avenue, Medical District, London
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-teal-900" />
                <p className="text-gray-400 text-xs">
                  123 Beauty Avenue, Medical District, London
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="bg-gray-700 rounded-xl px-8 py-6 items-center flex justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold text-md">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Get updates on special offers and beauty tips
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-gray-500 text-sm text-gray-200 rounded-full px-4 py-2"
            />
            <button className="rounded-4xl text-xs font-medium text-white bg-teal-900 px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="divider-line px-10 py-4">
        <div className="h-0.5 border border-gray-600"></div>
      </div>
      <div className="flex items-center justify-between px-10 py-8">
        <div>
          <p className="text-xs text-gray-500">
            @ 2025 Glamour Clinic. All rights reserved
          </p>
        </div>
        <div className="flex gap-6">
          <p className="text-xs text-gray-500">Privacy Policy</p>
          <p className="text-xs text-gray-500">Terms of Service</p>
          <p className="text-xs text-gray-500">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
