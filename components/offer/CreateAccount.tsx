import { systemFont } from "@/utils/fonts/SystemFonts";
import React from "react";

const CreateAccount = () => {
  const methods = [
    {
      label: "Create as a Student",
      image: "/images/student.svg",
    },
    {
      label: "Create as Organization",
      image: "/images/organization.svg",
    },
  ];

  return (
    <div className="flex gap-10 justify-center items-center h-screen">
      {methods.map((method, index) => (
        <article
          key={index}
          className="w-[392px] h-[331px] bg-white rounded-2xl shadow-lg shadow-gray-400/30 p-6 border border-[#CCCCCC] flex flex-col items-center "
        >
          <img src={method.image} alt="" className=" h-[300px]" />
          <h2 className={`${systemFont} font-semibold`}>{method.label}</h2>
        </article>
      ))}
    </div>
  );
};

export default CreateAccount;
