import React from "react";
import { systemFont } from "@/utils/fonts/SystemFonts";

const OfferSection = () => {
  return (
    <div className="p-4 pt-20 ">
      <div className="flex justify-center">
        <h1
          className={`${systemFont} font-semibold text-[28px] text-[#42474C]`}
        >
          What We Offer
        </h1>
      </div>

      <div className="flex gap-10 pl-20 pr-20 mt-6">
        {/* Students */}
        <div className="w-[50%] border border-[#CCCCCC] flex flex-col items-center p-10 gap-8 ">
          <div>
            <h3 className={`${systemFont} font-bold  text-[#42474C]`}>
              For Students
            </h3>
          </div>
          <div>
            <img src="/images/student.svg" alt="" width={200} height={150} />
          </div>
          <div>
            <p className={`${systemFont} text-[#42474C] text-center`}>
              “IskolarHub supports students from grade school to college by
              helping them find and apply for scholarships that fit their needs.
              Our platform simplifies the search process and guides learners
              toward opportunities that can shape their academic future.”
            </p>
          </div>
          <div>
            <button className="bg-[#2E72D2] w-100 h-8 text-white rounded">
              Find Scholarship Now
            </button>
          </div>
        </div>

        {/* Tenants */}
        <div className="w-[50%] border border-[#CCCCCC] flex flex-col items-center p-10 gap-8 ">
          <div>
            <h3 className={`${systemFont} font-bold  text-[#42474C]`}>
              For Organization
            </h3>
          </div>
          <div>
            <img
              src="/images/organization.svg"
              alt=""
              width={200}
              height={150}
            />
          </div>
          <div>
            <p className={`${systemFont} text-[#42474C] text-center`}>
              “Through IskolarHub, organizations can create and published their
              scholarship programs with ease—reaching the right students,
              simplifying application management, and creating lasting
              opportunities in education.”
            </p>
          </div>
          <div>
            <button className="border border-[#2E72D2] w-100 h-8 text-[#2E72D2] rounded">
              Post Sholarship Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
