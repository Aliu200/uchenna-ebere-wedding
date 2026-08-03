"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-[#23402F] text-xl md:text-2xl font-semibold tracking-wide">
          <span className="text-[#C8A96A]">#</span>
          SELoveStory
        </h1>

        <ul className="hidden md:flex gap-10 text-[#23402F] font-medium">

          <li>
            <a href="#story" className="hover:text-[#C8A96A] transition">
              Our Story
            </a>
          </li>

          <li>
            <a href="#details" className="hover:text-[#C8A96A] transition">
              Details
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-[#C8A96A] transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#rsvp" className="hover:text-[#C8A96A] transition">
              RSVP
            </a>
          </li>

        </ul>

        <button
          className="md:hidden text-[#23402F]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-[#23402F] text-lg">

          <li>
            <a href="#story" onClick={closeMenu}>
              Our Story
            </a>
          </li>

          <li>
            <a href="#details" onClick={closeMenu}>
              Details
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#rsvp" onClick={closeMenu}>
              RSVP
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}