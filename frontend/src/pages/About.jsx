import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImage from "../assets/AboutUs.jpg"; // Replace with an actual image path
import BalrajImage from "../assets/Balraj.jpg"; // Replace with Balraj's profile image path
import BalajiImage from "../assets/Balaji.jpg"; // Replace with Balaji's profile image path
import DivyanshuImage from "../assets/dk.jpg"; // Replace with Divyanshu's profile image path

function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Gatherly</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            At Gatherly, we believe in the power of bringing people together. 
            Whether you're planning an intimate gathering, a community event, or a global conference, 
            our platform is here to make it simple, seamless, and successful.
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <img
              src={AboutImage}
              alt="About Gatherly"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to connect people through events that inspire, engage, and leave a lasting impact. 
              From discovering exciting events in your area to organizing your own, Gatherly makes it effortless 
              to turn moments into memories.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Choose Gatherly?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">User-friendly platform for event discovery and management.</li>
              <li className="mb-2">Powerful filters to find the events that match your interests.</li>
              <li className="mb-2">Comprehensive tools for event organizers to manage every detail.</li>
              <li className="mb-2">Dedicated to fostering connections and community.</li>
            </ul>
          </div>
        </div>

         {/* Future Plans Section */}
         <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Future Plans</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-center">
            We are continuously evolving and striving to make Gatherly the ultimate event management platform. Here are some of the exciting features we plan to introduce:
          </p>

          <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-4">
            <li>
              <span className="font-semibold">Chatbot for Event Recommendations:</span> 
              Personalized suggestions based on user preferences and behavior.
            </li>
            <li>
              <span className="font-semibold">Gamification:</span> 
              Engage users with polls, badges, and other interactive elements to enhance the experience.
            </li>
            <li>
              <span className="font-semibold">Live Streaming Integration:</span> 
              Seamlessly broadcast events to a global audience.
            </li>
            <li>
              <span className="font-semibold">AI-Powered Recommendations:</span> 
              Use advanced algorithms to match users with events they'll love.
            </li>
            <li>
              <span className="font-semibold">Emotional Analytics Using AI:</span> 
              Analyze attendee emotions and feedback to create more engaging experiences.
            </li>
          </ul>
        </div>
      </div>

        {/* Meet the Team Section */}
        <div className="text-center mt-12 container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Gatherly was created by a passionate team of innovators dedicated to simplifying event management. 
            We are developers, designers, and dreamers with a shared vision to make event planning as fun as attending them!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={BalrajImage}
                alt="Balraj Choure"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Balraj Choure</h3>
              <p className="text-gray-700">Backend Developer</p>
              <p className="text-gray-500 text-sm mt-2">
                Expert in creating robust and scalable backend systems to power Gatherly.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={BalajiImage}
                alt="Balaji Iyer"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Balaji Iyer</h3>
              <p className="text-gray-700">Frontend Developer</p>
              <p className="text-gray-500 text-sm mt-2">
                Specializes in crafting intuitive and responsive user interfaces.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={DivyanshuImage}
                alt="Divyanshu Kapale"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Divyanshu Kapale</h3>
              <p className="text-gray-700">UI/UX Designer</p>
              <p className="text-gray-500 text-sm mt-2">
                Designs seamless and engaging user experiences for Gatherly.
              </p>
            </div>
          </div>
        </div>

       
      <Footer />
    </div>
  );
}

export default About;
