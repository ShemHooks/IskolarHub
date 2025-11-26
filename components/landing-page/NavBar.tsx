import React from "react";
import { Poppins } from "next/font/google";
import { systemFont } from "@/utils/fonts/SystemFonts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const NavBar = () => {
  return (
    <nav className="flex justify-between pt-2 pb-2 pl-8 pr-8 bg-white items-center fixed w-full">
      <div>
        <h1
          className={`${poppins.className} text-[#2E72D2] font-black text-[30px]`}
        >
          iskolarhub
        </h1>
      </div>

      <div className="flex items-center gap-20">
        <div className="flex gap-4">
          <a href="" className={`${systemFont}`}>
            About Us
          </a>
          <a href="" className={`${systemFont}`}>
            Contact Us
          </a>
        </div>
        <button className="bg-transparent text-blue-500 border w-20 h-10 rounded cursor-pointer font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
