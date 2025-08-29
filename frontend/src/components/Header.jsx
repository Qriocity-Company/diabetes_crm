import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - CRM Logo */}
          <div className="flex-shrink-0">
            <Link to="/forms" className="flex items-center">
              <span className="text-xl font-bold">CRM</span>
            </Link>
          </div>

          {/* Right side - Navigation Links */}
          <nav className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/forms"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === "/forms"
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                Consultations
              </Link>

              <Link
                to="/bookings"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === "/bookings"
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                Bookings
              </Link>

              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-500 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white p-1 rounded-md"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-48 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-800">
          <Link
            to="/forms"
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/forms"
                ? "bg-white text-purple-700"
                : "text-white hover:bg-purple-500"
            }`}
          >
            Consultations
          </Link>

          <Link
            to="/bookings"
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/bookings"
                ? "bg-white text-purple-700"
                : "text-white hover:bg-purple-500"
            }`}
          >
            Bookings
          </Link>

          <button
            onClick={() => {
              closeMobileMenu();
              handleLogout();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-500"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
