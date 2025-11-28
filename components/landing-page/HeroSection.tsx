"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { systemFont } from "@/utils/fonts/SystemFonts";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="bg-[url(/images/heroBg.png)] bg-cover bg-center h-screen flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <h1
          className={`${poppins.className} text-[#2E72D2] font-black text-[70px]`}
        >
          iskolarhub
        </h1>
        <h3 className={`${systemFont} text-white text-[28px] font-semibold`}>
          Where Knowledge Meets Opportunity
        </h3>
        <button
          onClick={() => router.push("/offer")}
          className={`${systemFont} bg-blue-500 text-white w-40 h-13 rounded-2xl mt-2 cursor-pointer`}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
