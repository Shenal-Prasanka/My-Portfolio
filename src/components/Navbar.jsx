import { useState, useEffect } from "react";
import logo from "../assets/name.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed flex items-center justify-between px-8 bg-gray-950 w-full z-10 top-0 left-0 h-16">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28 h-28" src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul>
          <li className="m-8 flex items-center justify-center gap-6 text-lg">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white">Skills</a>
            <a href="#experiences" className="text-gray-400 hover:text-white">Experiences</a>
            <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-950 py-4 px-8">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#skills" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#experiences" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>Experiences</a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-400 py-2" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;