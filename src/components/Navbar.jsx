import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative px-5 py-5">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">Shap.</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 text-xl font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block border border-amber-200 bg-yellow-300 px-5 py-2 rounded-2xl">
          <span className="text-xl font-medium">Start a Project</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-5">
          <ul className="flex flex-col items-center gap-5 text-lg font-semibold border-t pt-5">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/work" onClick={() => setMenuOpen(false)}>
                Work
              </Link>
            </li>

            <li>
              <button className="border border-amber-200 bg-yellow-300 px-5 py-2 rounded-2xl">
                Start a Project
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar