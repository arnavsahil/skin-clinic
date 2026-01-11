import React from "react";
import clinicImg from "../assets/clinichome.jpg";
const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="navbar w-full h-16 bg-[#FAFAD2] fixed top-0 z-50 flex px-10 py-4 justify-between">
        <div className="text-2xl text-teal-700 font-bold">Glamour Spa</div>
        <div className="flex gap-4">
          <h4 className="text-gray-600 text-sm font-medium">Home</h4>
          <h4 className="text-gray-600 text-sm font-medium">Services</h4>
          <h4 className="text-gray-600 text-sm font-medium">About Us</h4>
          <h4 className="text-gray-600 text-sm font-medium">Our Specialists</h4>
          <h4 className="text-gray-600 text-sm font-medium">Contact Us</h4>
        </div>
        <div>
          <button className="border rounded-4xl px-4 py-2 text-xs bg-teal-900 text-white font-semibold">
            Book Appointment
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center gap-36 mx-20 my-24">
        <div className="w-1/3 flex flex-col gap-8">
          <h1 className="text-5xl font-bold">
            Enhance Your Natural <span className="text-teal-900">Beauty</span>
          </h1>
          <p className="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            tempore, consequuntur fugiat velit sapiente vel ad minima ullam quo
            neque dignissimos eveniet aut cumque, temporibus, odit rem ea?
            Quisquam, molestias!
          </p>
          <div className="flex gap-4">
            <button className="border rounded-4xl px-4 py-2 text-xs bg-teal-900 text-white font-semibold">
              Book a Consultation
            </button>
            <button className="border rounded-4xl px-4 py-2 text-xs text-teal-900 font-semibold">
              Explore Services
            </button>
          </div>
          <div className="flex justify-between mx-10">
            <div>
              <h4 className="text-teal-900 font-bold">2500+</h4>
              <p className="text-xs text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-teal-900 font-bold">15+</h4>
              <p className="text-xs text-gray-600">Specialists</p>
            </div>
            <div>
              <h4 className="text-teal-900 font-bold">50+</h4>
              <p className="text-xs text-gray-600">Treatments</p>
            </div>
            <div>
              <h4 className="text-teal-900 font-bold">10+</h4>
              <p className="text-xs text-gray-600">Years</p>
            </div>
          </div>
        </div>
        <div className="h-64 w-1/3">
          <img
            src={clinicImg}
            className="absolute right-60  z-1 h-80 w-80 rounded-full"
          />
          <div className="absolute right-80 top-30 w-72 h-72 rounded-full bg-green-100"></div>
          <div className="absolute right-36 top-60 w-72 h-72 rounded-full bg-green-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
