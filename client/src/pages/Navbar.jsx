import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai"; 
import { useAuth } from "../store/auth";

export const Navbar = ({ showContact, setShowContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {isLoggedIn} = useAuth();


  return (
    <nav className="w-full z-50 relative">
      {/* Desktop Navbar (visible from sm and up) */}
      <div className="hidden sm:flex justify-between items-center bg-white px-6 py-3 shadow-md">
        <Link to="/" className="text-[#3730a3] text-2xl font-bold">
          beEvent
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-[#3730a3] underline">
            Home
          </Link>
          <Link to="/create" className="text-gray-600 hover:underline">
            Create
          </Link>
          <Link to="/event" className="text-gray-600 hover:underline">
            Event
          </Link>
          <Link className="text-gray-600 hover:underline" 
          onClick={() => setShowContact && setShowContact(!showContact)}>
            Contact
          </Link>

          {isLoggedIn ? (
            <Link
            to="/register"
            className="text-white bg-[#3730a3] py-2 px-4 rounded hover:bg-white hover:text-[#3730a3] border border-[#3730a3]"
          >
            Logout
          </Link>
          ) : (
            <>
            <Link
            to="/register"
            className="text-white bg-[#3730a3] py-2 px-4 rounded hover:bg-white hover:text-[#3730a3] border border-[#3730a3]"
          >
            Register
          </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-4 py-4 sm:hidden bg-white shadow-md">
        <Link className="text-[#3730a3] text-2xl font-bold">BeEvent</Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#3730a3] text-3xl focus:outline-none"
        >
          <AiOutlineBars/>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
  <div className="bg-white shadow-md absolute right-4 top-16 w-64 rounded-md border border-gray-200 z-50 sm:hidden ">
    <Link
      to="/"
      className="block px-4 py-3 text-[#3730a3] font-semibold hover:bg-gray-100"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <Link
      to="/create"
      className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
      onClick={() => setIsOpen(false)}
    >
      Create
    </Link>
    <button
      to="/event"
      className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
      onClick={() => setIsOpen(false)}
    >
      Event
    </button>
    <Link
      className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
      onClick={() => {setIsOpen(false) ;   setShowContact && setShowContact(!showContact)}}
    >
      Contact
    </Link>


    {isLoggedIn ? (
    <Link
      to="/register"
      className="block text-center px-4 py-3 mt-2 bg-[#3730a3] text-white rounded hover:bg-white hover:text-[#3730a3] border border-[#3730a3]"
      onClick={() => setIsOpen(false)}
    >
      Logout
    </Link>

    ) : (
      <Link
      to="/register"
      className="block text-center px-4 py-3 mt-2 bg-[#3730a3] text-white rounded hover:bg-white hover:text-[#3730a3] border border-[#3730a3]"
      onClick={() => setIsOpen(false)}
    >
      Register
    </Link>
    )}
  </div>
)}
    </nav>
  );
};
