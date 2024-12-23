import React from "react";
import LogoWhite from "../assets/LogoWhite.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-3">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start md:col-span-1">
          <img src={LogoWhite} alt="Gatherly" className="h-20 w-40 mb-3" />
          <p className="text-sm text-gray-400">
            Gatherly helps you find, host, and join amazing events that bring people together. Empowering communities through events.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Stay Connected */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex space-x-4">
            <a href="#facebook" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-500 text-sm py-4 text-center">
        <p>
          © {new Date().getFullYear()} Gatherly. All Rights Reserved. | Built with ❤️ during Hackathon.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
