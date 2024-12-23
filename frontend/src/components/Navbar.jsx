import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    navigate(`/explore?search=${searchQuery}`);
  };

  const dropdownOptions = [
    { label: "Profile", action: () => navigate("/profile") },
    { label: "Dashboard", action: () => navigate("/dashboard") },
    { label: "Logout", action: () => console.log("Logout clicked") },
  ];

  const handleOptionSelect = (action) => {
    action(); // Execute the navigation or action
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo"
            className="h-16 w-auto cursor-pointer"
          />
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="ml-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow"
          >
            Search
          </button>
        </div>

        {/* Navigation Links + Profile Icon (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center text-gray-700 text-sm font-medium">
          <Link to="/postevents" className="hover:text-blue-500 transition">
            Post Events
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/explore" className="hover:text-blue-500 transition">
            Explore
          </Link>

          {/* Profile Icon with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition focus:outline-none"
            >
              {/* Profile Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a5 5 0 100 10 5 5 0 000-10zM3.172 18.828A9 9 0 0112 14a9 9 0 018.828 4.828C19.874 20.463 16.133 22 12 22s-7.874-1.537-8.828-3.172z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(option.action)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu + Profile Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition focus:outline-none"
            >
              {/* Profile Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a5 5 0 100 10 5 5 0 000-10zM3.172 18.828A9 9 0 0112 14a9 9 0 018.828 4.828C19.874 20.463 16.133 22 12 22s-7.874-1.537-8.828-3.172z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(option.action)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300 shadow-lg">
          <div className="px-4 py-4">
            {/* Search Bar for Mobile */}
            <div className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="mt-2 w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
              >
                Search
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4 text-gray-700 text-sm font-medium">
              <Link to="/postevents" className="block hover:text-blue-500 transition">
                Post Events
              </Link>
              <Link to="/about" className="block hover:text-blue-500 transition">
                About
              </Link>
              <Link to="/explore" className="block hover:text-blue-500 transition">
                Explore
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
