import React, { useState } from "react";
import axios from "axios";

const PostEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    date_of_event: "",
    organizer_name: "",
    event_time: "",
    category: "",
    mode: "",
    venue: "",
    city: "",
    country: "",
    event_description: "",
    eligibility: "",
    participant_count: "",
    ticket_price: "",
    event_pic: "",
    caption: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-backend-api.com/events", formData);
      console.log("Event posted successfully:", response.data);
      alert("Event posted successfully!");
      setFormData({
        title: "",
        date_of_event: "",
        organizer_name: "",
        event_time: "",
        category: "",
        mode: "",
        venue: "",
        city: "",
        country: "",
        event_description: "",
        eligibility: "",
        participant_count: "",
        ticket_price: "",
        event_pic: "",
        caption: "",
      });
    } catch (error) {
      console.error("Error posting event:", error);
      alert("Error posting the event. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Post a New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Event Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              name="date_of_event"
              value={formData.date_of_event}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="organizer_name"
              value={formData.organizer_name}
              onChange={handleInputChange}
              placeholder="Organizer Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="event_time"
              value={formData.event_time}
              onChange={handleInputChange}
              placeholder="Event Time (e.g., 10:00 AM - 4:00 PM)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Category (e.g., Technology)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="mode"
              value={formData.mode}
              onChange={handleInputChange}
              placeholder="Mode (e.g., Online, In-Person, Hybrid)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="Venue"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            name="event_description"
            value={formData.event_description}
            onChange={handleInputChange}
            placeholder="Event Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <textarea
            name="eligibility"
            value={formData.eligibility}
            onChange={handleInputChange}
            placeholder="Eligibility"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            required
          ></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="participant_count"
              value={formData.participant_count}
              onChange={handleInputChange}
              placeholder="Participant Count"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="ticket_price"
              value={formData.ticket_price}
              onChange={handleInputChange}
              placeholder="Ticket Price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="url"
              name="event_pic"
              value={formData.event_pic}
              onChange={handleInputChange}
              placeholder="Event Picture URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              placeholder="Caption"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEventPage;
