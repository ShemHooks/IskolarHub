"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { systemFont } from "@/utils/fonts/SystemFonts";
import { ChevronUpOutline } from "react-ionicons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const FooterSection = () => {
  const logo = "IskolarHub";
  const text =
    "A unified platform where students discover opportunities and organizations manage and share their scholarships with ease.";

  type SocialImage = {
    key: string;
    src: string;
    alt: string;
  };

  const images: SocialImage[] = [
    { key: "facebook", src: "/images/facebook_logo.svg", alt: "Facebook" },
    { key: "instagram", src: "/images/instagram_logo.svg", alt: "Instagram" },
    { key: "gmail", src: "/images/gmail_logo.svg", alt: "Gmail" },
  ];

  const handleLinkClick = (key: string): void => {
    alert(
      "The social link of iskolarhub is down for a moment. Sorry for inconvenience"
    );
  };

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
    <section id="contact" className="bg-[#000000] ">
      <div className="pt-10 pl-20 pb-8 pr-20 flex justify-between">
        <div className="w-105">
          <div className="mb-4">
            <h1
              className={`${poppins.className} text-[#2E72D2] font-black text-[25px]`}
            >
              {logo}
            </h1>
          </div>
          <div>
            <p className={`${systemFont} text-white`}>{text}</p>
          </div>
          <div className="flex  gap-8 mt-6">
            {images.map((img, i) => (
              <button key={i} onClick={() => handleLinkClick(img.key)}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-7 h-7 cursor-pointer hover:opacity-70 transition"
                />
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={(e) => scrollToSection(e, "hero")}
              className="text-white border border-[#2E72D2] w-40 mt-6 flex justify-center items-center p-2 gap-2 cursor-pointer"
            >
              <ChevronUpOutline height="24px" width="24px" color="white" />
              Scroll Up
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="" className="text-white">
            Legal
          </a>
          <a href="" className="text-white">
            Privacy and Policy
          </a>
          <a href="" className="text-white">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[#42474C]">
          © 2025 IskolarHub. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
