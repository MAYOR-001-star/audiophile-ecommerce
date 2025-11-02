"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCategory } from "@/context/CategoryContext";

export default function Header() {
  const { setCurrentCategory } = useCategory();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* === Top Navigation Bar === */}
      <div className="flex justify-between items-center py-8 px-6 md:px-12 lg:px-10 xl:px-0 max-w-[1110px] mx-auto border-b border-white/20">
        {/* === Mobile Menu Button === */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Menu">
          <Image
            src="/assets/hamburger.svg"
            alt="menu icon"
            width={24}
            height={24}
            className="w-6 h-auto"
            priority
          />
        </button>

        {/* === Logo === */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white text-xl tracking-[0.2em] uppercase"
        >
          <Image
            src="/assets/audiophile.svg"
            alt="Audiophile Logo"
            width={96}
            height={24}
            className="w-24 h-auto"
            priority
          />
        </Link>

        {/* === Desktop Navigation === */}
        <nav className="hidden lg:flex space-x-8 uppercase text-sm text-white tracking-wider">
          <Link
            href="/"
            className="hover:text-[#D87D4A] transition-colors duration-200"
            onClick={() => setCurrentCategory("home")}
          >
            Home
          </Link>
          <Link
            href="/shop/headphones"
            className="hover:text-[#D87D4A] transition-colors duration-200"
            onClick={() => setCurrentCategory("Headphones")}
          >
            Headphones
          </Link>
          <Link
            href="/shop/speakers"
            className="hover:text-[#D87D4A] transition-colors duration-200"
            onClick={() => setCurrentCategory("Speakers")}
          >
            Speakers
          </Link>
          <Link
            href="/shop/earphones"
            className="hover:text-[#D87D4A] transition-colors duration-200"
            onClick={() => setCurrentCategory("Earphones")}
          >
            Earphones
          </Link>
        </nav>

        {/* === Cart Icon === */}
        <div className="flex items-center gap-6">
          <Image
            src="/assets/cart.svg"
            alt="cart icon"
            width={24}
            height={24}
            className="w-6 h-auto"
          />
        </div>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {menuOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white shadow-lg flex flex-col space-y-4 py-6 items-center uppercase text-sm text-[#101010] z-50 animate-slideDown">
          <Link
            href="/"
            onClick={() => {
              closeMenu();
              setCurrentCategory("home");
            }}
            className="hover:text-[#D87D4A] transition"
          >
            Home
          </Link>
          <Link
            href="/shop/headphones"
            onClick={() => {
              closeMenu();
              setCurrentCategory("Headphones");
            }}
            className="hover:text-[#D87D4A] transition"
          >
            Headphones
          </Link>
          <Link
            href="/shop/speakers"
            onClick={() => {
              closeMenu();
              setCurrentCategory("Speakers");
            }}
            className="hover:text-[#D87D4A] transition"
          >
            Speakers
          </Link>
          <Link
            href="/shop/earphones"
            onClick={() => {
              closeMenu();
              setCurrentCategory("Earphones");
            }}
            className="hover:text-[#D87D4A] transition"
          >
            Earphones
          </Link>
        </div>
      )}
    </header>
  );
}
