import React from "react";
import { FaUsers, FaCalendarAlt, FaChartLine, FaHandshake } from "react-icons/fa";

function KeyFeatures() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Gatherly?
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the key features that make Gatherly the best platform for hosting and joining events.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-blue-500 text-5xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Community Building</h3>
            <p className="text-gray-600 mt-2">
              Connect with like-minded people and grow vibrant communities through impactful events.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-blue-500 text-5xl mb-4">
              <FaCalendarAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Event Scheduling</h3>
            <p className="text-gray-600 mt-2">
              Easily organize and manage events with Gatherly’s intuitive scheduling tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-blue-500 text-5xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Performance Insights</h3>
            <p className="text-gray-600 mt-2">
              Analyze event success with detailed metrics and optimize for future engagements.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-blue-500 text-5xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Seamless Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Work with co-hosts and sponsors effortlessly to create unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
