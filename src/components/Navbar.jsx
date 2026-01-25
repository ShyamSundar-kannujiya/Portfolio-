import{ nav } from 'framer-motion/client'
import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-1 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#">
            Shyam
            <span className="text-purple">Sundar</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>AboutMe</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer "
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 justify-center items-center">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Home</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>AboutMe</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Skills</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Projects</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar
