"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full py-3 bg-white border-b">
        <div className="container flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold">Exclusive</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-black text-gray-600">Home</Link>
            <Link href="/contact" className="hover:text-black text-gray-600">Contact</Link>
            <Link href="/about" className="hover:text-black text-gray-600">About</Link>
            <Link href="/all-products" className="hover:text-black text-gray-600">Shop Now</Link>
            <Link href="/signup" className="hover:text-black text-gray-600">Sign-Up</Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">

            {/* Search */}
            <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm w-48"
              />
              <FiSearch className="text-gray-500" />
            </div>

            {/* Icons */}
            <FiHeart className="text-xl cursor-pointer" />
            <FiShoppingCart className="text-xl cursor-pointer" />

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <FiMenu
                className="text-2xl cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Right Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Mobile menu items */}
        <nav className="flex flex-col space-y-6 text-lg font-medium px-6">
          <Link href="/" className="hover:text-black text-gray-600">Home</Link>
          <Link href="/contact" className="hover:text-black text-gray-600">Contact</Link>
          <Link href="/about" className="hover:text-black text-gray-600">About</Link>
          <Link href="/Products" className="hover:text-black text-gray-600">Shop Now</Link>
          <Link href="/signup" className="hover:text-black text-gray-600">Sign-Up</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
