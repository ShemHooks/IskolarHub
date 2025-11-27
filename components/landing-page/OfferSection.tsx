import React from "react";
import { systemFont } from "@/utils/fonts/SystemFonts";

const OfferSection = () => {
  const page_title = "What We Offer";

  const offers = [
    {
      title: "For Students",
      image: "/images/student.svg",
      description:
        "IskolarHub supports students from grade school to college by helping them find and apply for scholarships that fit their needs. Our platform simplifies the search process and guides learners toward opportunities that can shape their academic future.",
      button: {
        label: "Find Scholarship Now",
        style: "bg-[#2E72D2] text-white",
      },
    },
    {
      title: "For Organizations",
      image: "/images/organization.svg",
      description:
        "Through IskolarHub, organizations can create and publish scholarship programs with ease—reaching the right students, simplifying application management, and creating lasting opportunities in education.",
      button: {
        label: "Post Scholarship Program",
        style: "border border-[#2E72D2] text-[#2E72D2]",
      },
    },
  ];

  return (
    <section id="offer" className="p-4 pt-20 ">
      <div className="flex justify-center">
        <h1
          className={`${systemFont} font-semibold text-[28px] text-[#42474C]`}
        >
          {page_title}
        </h1>
      </div>

      <div className="flex gap-10 pl-20 pr-20 mt-6">
        {offers.map((offer, index) => (
          <article
            key={index}
            className="w-[50%] border border-[#CCCCCC] flex flex-col justify-between items-center p-10 gap-8 rounded-2xl shadow-sm"
          >
            <div className="flex flex-col items-center gap-8 flex-grow">
              <h3
                className={`${systemFont} font-bold text-[22px] text-[#42474C]`}
              >
                {offer.title}
              </h3>

              <img
                src={offer.image}
                alt={offer.title}
                width={200}
                height={150}
              />

              <p
                className={`${systemFont} text-[#42474C] text-center text-[15px] leading-relaxed`}
              >
                {offer.description}
              </p>
            </div>

            <button
              className={`${offer.button.style} px-6 py-2 rounded-md cursor-pointer font-medium transition-all hover:opacity-90`}
            >
              {offer.button.label}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
