import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import events from "../data/events"; // Assuming events are stored in this file
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function EventDetails() {
  const { id } = useParams(); // Extract event ID from URL
  const [event, setEvent] = useState(null);

  const navigate = useNavigate();


  // Fetch event details based on the event ID
  useEffect(() => {
    const foundEvent = events.find((event) => event.id === Number(id)); // Convert id to a number
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading event details...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Event Banner */}
        <div
          className="relative h-96"
          style={{
            backgroundImage: `url(${event.event_pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold drop-shadow-lg">
              {event.title}
            </h1>
          </div>
        </div>

        {/* Event Details */}
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Event Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Event Details
                </h2>
                <p className="text-gray-600 mt-4">
                  {event.event_description}
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(event.date_of_event).toLocaleDateString()}
                  </li>
                  <li>
                    <span className="font-medium">Time:</span> {event.event_time}
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> {event.venue},{" "}
                    {event.city}, {event.country}
                  </li>
                  <li>
                    <span className="font-medium">Mode:</span> {event.mode}
                  </li>
                  <li>
                    <span className="font-medium">Organized by:</span>{" "}
                    {event.organizer_name}
                  </li>
                  <li>
                    <span className="font-medium">Eligibility:</span>{" "}
                    {event.eligibility}
                  </li>
                </ul>
              </div>
              {/* Event Price & Participation */}
              <div>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Participate in this Event
                  </h3>
                  <p className="text-gray-600 mt-3">
                    Price:{" "}
                    <span className="text-lg font-bold text-green-600">
                      ${event.ticket_price.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-600 mt-3">
                    Participant Strength :{" "}
                    <span className="font-semibold">
                      {event.participant_count}
                    </span>
                  </p>
                  <button onClick={() => navigate(`/register/${id}`)} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Gatherly. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default EventDetails;
