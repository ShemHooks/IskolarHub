"use client";

import { Poppins } from "next/font/google";
import { systemFont } from "@/utils/fonts/SystemFonts";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const OfferNav = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between pl-10 pr-10 pt-4 fixed w-full">
      <div onClick={() => router.push("/")}>
        <h1
          className={`${poppins.className} text-[#2E72D2] font-black text-[30px] cursor-pointer`}
        >
          iskolarhub
        </h1>
      </div>
      <div>
        <button
          className={`${systemFont} text-[#2E72D2] border border-[#2E72D2] w-20 h-10 rounded cursor-pointer font-semibold hover:opacity-80 transition`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default OfferNav;
