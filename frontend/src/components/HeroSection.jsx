import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { useNavigate } from "react-router-dom";

function HeroSection() {

  const navigate = useNavigate();
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Left Content: Heading and Call to Action */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover & Host Events Effortlessly
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Gatherly helps you connect, create, and explore events that bring communities together.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button onClick={()=>{navigate('/explore')}} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
              Get Started
            </button>
            <button onClick={()=>{navigate('/about')}} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="flex-1">
          <img
            src={HeroImage}
            alt="People at an event"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
