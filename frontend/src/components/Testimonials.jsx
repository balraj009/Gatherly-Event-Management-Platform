import React from "react";

function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mt-4">
            Hear from our users about how Gatherly has transformed their event experiences.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/100"
              alt="User 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg text-gray-700 font-medium">
              "Gatherly made hosting our event seamless and enjoyable. The user-friendly tools and features are unmatched!"
            </p>
            <p className="mt-4 text-gray-500">- Sarah Johnson, Event Organizer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/100"
              alt="User 2"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg text-gray-700 font-medium">
              "I discovered amazing events in my city using Gatherly. It’s my go-to platform for staying connected."
            </p>
            <p className="mt-4 text-gray-500">- David Lee, Event Attendee</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/100"
              alt="User 3"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg text-gray-700 font-medium">
              "As a sponsor, Gatherly helped us connect with the right audience. It’s a game-changer for event marketing."
            </p>
            <p className="mt-4 text-gray-500">- Maria Lopez, Event Sponsor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
