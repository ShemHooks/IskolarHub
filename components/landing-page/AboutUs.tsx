import React from "react";
import { systemFont } from "@/utils/fonts/SystemFonts";

const AboutUs = () => {
  const pageTitle = "About Us";

  const paragraphs = [
    `At IskolarHub, we believe that access to education is the key to unlocking a brighter future. We are a dedicated platform designed to connect students with scholarship opportunities, empowering them to pursue their academic dreams without financial barriers.`,

    `Our mission is to simplify the search and application process for scholarships, ensuring that every deserving student has the resources and support they need to succeed. By bridging the gap between students and scholarship providers, we aim to build a thriving community of learners, achievers, and dreamers.`,

    `Whether you’re seeking scholarships, guidance, or inspiration, IskolarHub is here to guide you every step of the way—because your education deserves a hub that cares.`,
  ];

  return (
    <section id="about" className="pt-10 bg-white">
      <header className="flex justify-center items-center">
        <h1
          className={`${systemFont} text-[#42474C] font-semibold text-[28px]`}
        >
          {pageTitle}
        </h1>
      </header>

      <div className="px-20 flex flex-col gap-4 pt-6 pb-8">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className={`${systemFont} text-[#6B7177] text-center leading-relaxed`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
