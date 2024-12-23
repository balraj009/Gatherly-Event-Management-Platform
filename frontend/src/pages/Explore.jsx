import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import events from "../data/events";
import EventDetails from "./EventDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Explore() {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date"); // Default sort by date
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  // Extract search query from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search");
    if (query) {
      setSearchQuery(query);
      handleSearch(query); // Trigger search immediately when the page loads
    }
  }, [location]);

  // Filtering Logic
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(lowerCaseQuery) ||
        event.category.toLowerCase().includes(lowerCaseQuery) ||
        event.organizer_name.toLowerCase().includes(lowerCaseQuery) ||
        event.city.toLowerCase().includes(lowerCaseQuery) ||
        event.country.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredEvents(filtered);
  };

  // Sorting Logic
  const handleSort = (option) => {
    setSortOption(option);
    const sortedEvents = [...filteredEvents].sort((a, b) => {
      if (option === "date") {
        return new Date(a.date_of_event) - new Date(b.date_of_event);
      } else if (option === "title") {
        return a.title.localeCompare(b.title);
      } else if (option === "price") {
        return a.price - b.price;
      }
      return 0;
    });
    setFilteredEvents(sortedEvents);
  };

  return (
  <>
    <Navbar></Navbar>
    <div>
      <div className="container mx-auto px-4 py-8 flex">
        <aside className="mr-2 w-2/4 md:w-1/4">
          <FilterSidebar onFilter={handleSearch} />
        </aside>

        <main className="w-3/4 ml-2">
          {searchQuery && (
            <h3 className="text-xl mb-4">Showing results for "{searchQuery}"</h3>
          )}

          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="sort" className="text-gray-700 font-medium">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="price">Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate(`/explore/eventdetails/${event.id}`)} // Navigate to event details page using ID
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={event.event_pic}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(event.date_of_event).toDateString()}
                  </p>
                  <p className="text-gray-700 font-medium mt-2">
                   {` Price: ${event.ticket_price}`}
                  </p>
                  <p className="text-gray-700 font-medium mt-2">
                    Organized by: {event.organizer_name}
                  </p>
                  <p className="text-blue-500 text-sm font-medium mt-1">
                    {event.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  </>
  );
}

export default Explore;
