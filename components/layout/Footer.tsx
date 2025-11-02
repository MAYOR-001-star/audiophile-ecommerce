import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white px-6 py-16 mt-20 w-full">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-12 w-full">
        {/* === Top: Logo + Nav === */}
        <div className="flex flex-col lg:flex-row md:justify-start lg:justify-between md:items-start lg:items-center gap-6 w-full">
          {/* === Logo === */}
          <Link
            href="/"
            className="font-bold lowercase text-xl text-center mx-auto md:mx-0 md:text-left"
          >
            <Image
              src="/assets/audiophile.svg"
              alt="Audiophile Logo"
              width={96}
              height={24}
              className="w-24 h-auto"
            />
          </Link>

          {/* === Navigation Links === */}
          <nav className="flex flex-col justify-center items-center md:flex-row md:justify-end gap-6 uppercase text-sm tracking-wider">
            <Link href="/" className="hover:text-[#D87D4A] transition">
              Home
            </Link>
            <Link
              href="/shop/headphones"
              className="hover:text-[#D87D4A] transition"
            >
              Headphones
            </Link>
            <Link
              href="/shop/speakers"
              className="hover:text-[#D87D4A] transition"
            >
              Speakers
            </Link>
            <Link
              href="/shop/earphones"
              className="hover:text-[#D87D4A] transition"
            >
              Earphones
            </Link>
          </nav>
        </div>

        {/* === Middle: Description + Socials (Desktop) === */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
          <p className="text-gray-400 leading-relaxed lg:max-w-xl text-center md:text-left">
            Audiophile is an all-in-one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility — we&apos;re open 7 days a week.
          </p>

          {/* === Desktop Social Icons === */}
          <div className="hidden lg:flex justify-end gap-6 text-2xl">
            <SocialLinks />
          </div>
        </div>

        {/* === Bottom: Copyright + Mobile Socials === */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright 2021. All Rights Reserved
          </p>

          {/* === Mobile Social Icons === */}
          <div className="flex justify-center md:justify-end gap-6 text-2xl lg:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* === Extracted Social Links Component === */
function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
        className="hover:text-[#D87D4A] transition"
      >
        <FaFacebookSquare />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        aria-label="Twitter"
        className="hover:text-[#D87D4A] transition"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        aria-label="Instagram"
        className="hover:text-[#D87D4A] transition"
      >
        <FaInstagram />
      </Link>
    </>
  );
}
