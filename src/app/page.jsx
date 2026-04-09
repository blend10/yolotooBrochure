import Image from "next/image";
import StartPage from "./components/StartPage";
import GalleryCarousel from "./components/GalleryCarousel";
import KeyFeatures from "./components/KeyFeatures";
import YachtSpecs from "./components/YachtSpecs";
import TeamGrid from "./components/TeamGrid";
import Disclaimer from "./components/Disclaimer";
import Planning from "./components/Planning";
import QuickSpecs from "./components/QuickSpecs";
import BentoGallery from "./components/BentoGallery";
import StoryGallery from "./components/StoryGallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <StartPage />
      <GalleryCarousel />
      <YachtSpecs />
      <Disclaimer />
      <KeyFeatures />
      <BentoGallery />
      <Planning />
      <QuickSpecs />
      <StoryGallery />
      <TeamGrid />
      <Footer />
    </div>
  );
}
