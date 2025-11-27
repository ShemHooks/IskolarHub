import NavBar from "@/components/landing-page/NavBar";
import HeroSection from "@/components/landing-page/HeroSection";
import AboutUs from "@/components/landing-page/AboutUs";
import OfferSection from "@/components/landing-page/OfferSection";
import FooterSection from "@/components/landing-page/FooterSection";

export default function Home() {
  return (
    <div className="bg-[#F0F0F0]">
      <NavBar />
      <main>
        <HeroSection />
        <AboutUs />
        <OfferSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
