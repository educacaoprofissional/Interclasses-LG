import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PenaltiesSection } from "./components/PenaltiesSection";
import { QuotesCarousel } from "./components/QuotesCarousel";
import { TournamentsSection } from "./components/TournamentsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#000000" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PenaltiesSection />
      <QuotesCarousel />
      <TournamentsSection />
      <Footer />
    </div>
  );
}
