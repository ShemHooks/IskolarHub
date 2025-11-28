import React from "react";
import CreateAccount from "@/components/offer/CreateAccount";
import OfferNav from "@/components/offer/OfferNav";

const page = () => {
  return (
    <div>
      <nav>
        <OfferNav />
      </nav>
      <main>
        <CreateAccount />
      </main>
    </div>
  );
};

export default page;
