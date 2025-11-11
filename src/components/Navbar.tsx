import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50">
      {/* Centered on small screens (w-11/12 sm:w-3/4), full-width on larger screens (md:w-full) */}
      <nav className=" sm:w-3/4 w-full max-w-7xl mx-auto z-50 bg-black/60 backdrop-blur-lg text-white shadow-lg sm:rounded-b-2xl transition-all duration-300">
        <div className="px-4 mx-auto sm:px-6">
          <div className="relative pt-4 pb-4 sm:pb-6">
            {/* Navbar Container */}
            <div
              className="relative flex items-center justify-between sm:h-12 md:justify-center"
              aria-label="Global"
            >
              {/* Logo & Mobile Menu Button */}
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/" className="flex items-center space-x-2 group">
                    <div className="w-auto h-8 sm:h-10 bg-yellow-400 p-1.5 rounded-full transition-transform group-hover:scale-110 duration-300">
                      <img
                        src="https://www.svgrepo.com/show/448244/pack.svg"
                        alt="Yabsra Logo"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-bold text-xl group-hover:text-yellow-400 transition-colors">Yabsra</span>
                  </Link>

                  {/* Mobile Menu Button */}
                  <div className="flex items-center -mr-2 md:hidden">
                    <motion.button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                      type="button"
                      aria-expanded={isOpen}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">Open main menu</span>
                      {isOpen ? (
                        <CloseOutlined style={{ fontSize: "20px" }} />
                      ) : (
                        <MenuOutlined style={{ fontSize: "20px" }} />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Center Menu (Desktop) */}
              <ul className="hidden md:flex md:space-x-10 list-none">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/feedback", label: "Feedback" },
                  { path: "/service", label: "Service" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-base font-medium transition-colors relative ${
                        location.pathname === item.path 
                          ? "text-yellow-400" 
                          : "hover:text-yellow-400"
                      }`}
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                          layoutId="navbar-underline"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Button (Desktop) */}
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex rounded-full shadow">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-5 py-2 text-base bg-yellow-400 border border-transparent rounded-full font-medium hover:bg-yellow-500 transition-colors"
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-3 bg-black/70 backdrop-blur-md shadow-md rounded-lg p-4 overflow-hidden"
                >
                  {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About" },
                    { path: "/projects", label: "Projects" },
                    { path: "/feedback", label: "Feedback" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`block px-3 py-2 rounded-md ${
                          location.pathname === item.path
                            ? "bg-yellow-400/20 text-yellow-400"
                            : "hover:bg-yellow-400 hover:text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mt-3"
                  >
                    <Link
                      to="/contact"
                      onClick={toggleMenu}
                      className="block text-center w-full px-4 py-2 bg-yellow-400 rounded-full font-medium hover:bg-yellow-500 text-black transition-colors"
                    >
                      Contact me
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
