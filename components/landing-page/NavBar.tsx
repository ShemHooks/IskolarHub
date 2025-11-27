"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { systemFont } from "@/utils/fonts/SystemFonts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const NavBar = () => {
  const scrollToSection = (e: any, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between py-2 px-8 bg-white items-center fixed w-full top-0 z-50 shadow-sm">
      {/* Logo */}
      <div>
        <h1
          className={`${poppins.className} text-[#2E72D2] font-black text-[30px]`}
        >
          iskolarhub
        </h1>
      </div>

      {/* Links + Button */}
      <div className="flex items-center gap-20">
        <div className="flex gap-6">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className={`${systemFont} text-[#42474C] hover:text-[#2E72D2] transition`}
          >
            About Us
          </a>

          <a
            href="#offer"
            onClick={(e) => scrollToSection(e, "offer")}
            className={`${systemFont} text-[#42474C] hover:text-[#2E72D2] transition`}
          >
            What We Offer
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className={`${systemFont} text-[#42474C] hover:text-[#2E72D2] transition`}
          >
            Contact Us
          </a>
        </div>

        <button
          className={`${systemFont} text-[#2E72D2] border border-[#2E72D2] w-20 h-10 rounded cursor-pointer font-semibold hover:opacity-80 transition`}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
